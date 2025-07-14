// src/app/posts/[slug]/layout.tsx
import React from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 bg-blue">
      <article className="prose lg:prose-xl mx-auto">
        {children}
      </article>
    </div>
  );
}