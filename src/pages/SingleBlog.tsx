/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlog() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (slug) {
      window.location.replace(`https://blog.niazdigital.com/${slug}/`);
    } else {
      window.location.replace('https://blog.niazdigital.com/');
    }
  }, [slug]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] dark:bg-[#070913] text-slate-600 dark:text-slate-300">
      <div className="text-center p-8">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-semibold tracking-wide">Redirecting to Niaz Digital WordPress Journal...</p>
      </div>
    </div>
  );
}
