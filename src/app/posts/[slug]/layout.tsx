// src/app/posts/[slug]/layout.tsx
import React from "react";
import "@/app/globals.css"; // This path uses your alias, which is correct

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto">{children}</div>;
}
