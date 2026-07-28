/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import ClientResults from '../components/ClientResults';
import { updateMetaTags } from '../lib/wordpress';

export default function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: 'Client Reviews & Testimonials | Niaz Digital',
      description: 'Read authentic reviews, critiques, and results from global clients, startups, and enterprises that work with Niaz Digital.',
      canonicalUrl: window.location.href
    });
  }, []);

  return (
    <div className="pt-20">
      <Testimonials />
      <ClientResults />
    </div>
  );
}
