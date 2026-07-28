/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * WordPress Headless REST API Client
 */

import { BlogArticle } from '../types';
import { BLOG_DATA } from '../data';

const WP_API_URL = "https://blog.niazdigital.com/wp-json/wp/v2";

/**
 * Utility to strip HTML tags from a string
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, "—")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .trim();
}

/**
 * Decode HTML entities in rendering strings
 */
export function decodeHtml(html: string): string {
  if (!html) return '';
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

/**
 * Maps a raw WordPress API post object to our custom BlogArticle interface
 */
export function mapWordPressPost(post: any): BlogArticle {
  // 1. Calculate reading time
  const contentText = post.content?.rendered || "";
  const plainText = stripHtml(contentText);
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(wordCount / 220)); // average 220 words per minute
  const readingTime = `${mins} min read`;

  // 2. Extract Category
  let categoryName = "Insights";
  if (post._embedded?.['wp:term']?.[0]?.length) {
    categoryName = post._embedded['wp:term'][0][0]?.name || "Insights";
  }

  // 3. Extract Author
  const authorObj = post._embedded?.['author']?.[0];
  const author = {
    name: authorObj?.name || "Azhar Uddin",
    avatar: authorObj?.avatar_urls?.['96'] || "/src/assets/images/founder_original.jpg",
    role: "Founder, Niaz Digital"
  };

  // 4. Extract Publish Date
  const dateObj = new Date(post.date);
  const publishedAt = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // 5. Extract Tags
  let tags: string[] = [];
  if (post._embedded?.['wp:term']?.[1]?.length) {
    tags = post._embedded['wp:term'][1].map((t: any) => t.name).filter(Boolean);
  }

  // 6. Extract Featured Image (with high-quality tech placeholder fallback)
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop";

  // 7. Extract official WordPress permalink returned by the API
  const permalink = post.link || (post.slug ? `https://blog.niazdigital.com/${post.slug}/` : "https://blog.niazdigital.com");

  return {
    id: post.id.toString(),
    title: decodeHtml(post.title?.rendered || ""),
    slug: post.slug || "",
    permalink,
    excerpt: decodeHtml(stripHtml(post.excerpt?.rendered || "")),
    content: contentText, // keep raw HTML for rich display rendering
    category: categoryName,
    author,
    readingTime,
    publishedAt,
    tags,
    image
  };
}

/**
 * Fetches the latest N posts from WordPress
 */
export async function fetchLatestPosts(limit: number = 6): Promise<BlogArticle[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${limit}&status=publish`);
    if (res.ok) {
      const data = await res.json();
      const mapped = data.map(mapWordPressPost);
      if (mapped.length > 0) return mapped;
    }
  } catch (error) {
    console.warn("Error fetching latest WordPress posts, using local fallback:", error);
  }
  return BLOG_DATA.slice(0, limit);
}

/**
 * Fetches all posts for the Blog Listing Page (with optional pagination)
 */
export async function fetchAllPosts(): Promise<BlogArticle[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=20&status=publish`);
    if (res.ok) {
      const data = await res.json();
      const mapped = data.map(mapWordPressPost);
      if (mapped.length > 0) {
        // Merge with local fallback posts without duplicates
        const existingSlugs = new Set(mapped.map((p: BlogArticle) => p.slug));
        const extraLocal = BLOG_DATA.filter(p => !existingSlugs.has(p.slug));
        return [...mapped, ...extraLocal];
      }
    }
  } catch (error) {
    console.warn("Error fetching all WordPress posts, using local fallback:", error);
  }
  return BLOG_DATA;
}

/**
 * Fetches a single post by its unique URL slug
 */
export async function fetchPostBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed&status=publish`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return mapWordPressPost(data[0]);
      }
    }
  } catch (error) {
    console.warn(`WordPress API fetch error for slug [${slug}], attempting local fallback:`, error);
  }

  // Fallback to local static blog dataset
  const localMatch = BLOG_DATA.find(post => post.slug === slug || post.id === slug);
  if (localMatch) {
    return localMatch;
  }

  return null;
}

/**
 * Helper to get related posts based on a category ID
 */
export async function fetchRelatedPosts(excludeId: string, limit: number = 3): Promise<BlogArticle[]> {
  try {
    // Just fetch the latest posts and exclude the current one as a standard robust related mechanism
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${limit + 1}&status=publish`);
    if (!res.ok) return [];
    const data = await res.json();
    return data
      .map(mapWordPressPost)
      .filter((post: BlogArticle) => post.id !== excludeId)
      .slice(0, limit);
  } catch (err) {
    console.error("Error fetching related posts:", err);
    return [];
  }
}

/**
 * Dynamically updates document metadata for SEO crawling and link shares
 */
export function updateMetaTags(meta: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}) {
  document.title = meta.title;

  // Format canonicalUrl strictly with primary domain https://niazdigital.com
  let path = "/";
  if (meta.canonicalUrl) {
    if (meta.canonicalUrl.startsWith("http")) {
      try {
        const parsed = new URL(meta.canonicalUrl);
        path = parsed.pathname + parsed.search;
      } catch {
        path = meta.canonicalUrl;
      }
    } else {
      path = meta.canonicalUrl.startsWith("/") ? meta.canonicalUrl : `/${meta.canonicalUrl}`;
    }
  }
  const normalizedCanonical = `https://niazdigital.com${path}`;

  // Normalize ogImage if relative
  let normalizedOgImage = meta.ogImage;
  if (normalizedOgImage && !normalizedOgImage.startsWith("http")) {
    normalizedOgImage = `https://niazdigital.com${normalizedOgImage.startsWith('/') ? '' : '/'}${normalizedOgImage}`;
  }
  
  // Description
  let descMeta = document.querySelector("meta[name='description']");
  if (!descMeta) {
    descMeta = document.createElement("meta");
    descMeta.setAttribute("name", "description");
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute("content", meta.description);

  // Canonical URL
  let canonical = document.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", normalizedCanonical);

  // Open Graph Title
  let ogTitle = document.querySelector("meta[property='og:title']");
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute("content", meta.title);

  // Open Graph Description
  let ogDesc = document.querySelector("meta[property='og:description']");
  if (!ogDesc) {
    ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute("content", meta.description);

  // Open Graph URL
  let ogUrl = document.querySelector("meta[property='og:url']");
  if (!ogUrl) {
    ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute("content", normalizedCanonical);

  // Open Graph Image
  if (normalizedOgImage) {
    let ogImg = document.querySelector("meta[property='og:image']");
    if (!ogImg) {
      ogImg = document.createElement("meta");
      ogImg.setAttribute("property", "og:image");
      document.head.appendChild(ogImg);
    }
    ogImg.setAttribute("content", normalizedOgImage);
  }

  // Twitter Card
  let twitterCard = document.querySelector("meta[name='twitter:card']");
  if (!twitterCard) {
    twitterCard = document.createElement("meta");
    twitterCard.setAttribute("name", "twitter:card");
    document.head.appendChild(twitterCard);
  }
  twitterCard.setAttribute("content", "summary_large_image");

  // Twitter Title
  let twitterTitle = document.querySelector("meta[name='twitter:title']");
  if (!twitterTitle) {
    twitterTitle = document.createElement("meta");
    twitterTitle.setAttribute("name", "twitter:title");
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute("content", meta.title);

  // Twitter Description
  let twitterDesc = document.querySelector("meta[name='twitter:description']");
  if (!twitterDesc) {
    twitterDesc = document.createElement("meta");
    twitterDesc.setAttribute("name", "twitter:description");
    document.head.appendChild(twitterDesc);
  }
  twitterDesc.setAttribute("content", meta.description);

  // Twitter Image
  if (normalizedOgImage) {
    let twitterImg = document.querySelector("meta[name='twitter:image']");
    if (!twitterImg) {
      twitterImg = document.createElement("meta");
      twitterImg.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImg);
    }
    twitterImg.setAttribute("content", normalizedOgImage);
  }
}
