// src/app/posts/[slug]/page.tsx (or similar path)
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Intro from "@/components/Intro";

// Define an interface for your frontmatter (from previous fix)
interface PostFrontMatter {
  title: string;
  date: string;
  [key: string]: string | number | boolean | string[] | undefined;
}

// Function to get all post slugs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/content", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const slugs = filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));

  return slugs;
}

// Function to fetch content for a single post (this remains async)
async function getPostData(slug: string) {
  const fullPath = path.join(
    process.cwd(),
    "src/content",
    "posts",
    `${slug}.mdx`,
  );

  let fileContent;
  try {
    fileContent = fs.readFileSync(fullPath, "utf-8");
  } catch (error) {
    console.error(`Failed to read post file: ${fullPath}`, error);
    notFound();
  }

  const { data: frontMatter, content } = matter(fileContent);

  return {
    frontMatter: frontMatter as PostFrontMatter, // Use your defined interface
    content,
  };
}

// Generate metadata for the page (for SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { frontMatter } = await getPostData(slug);

  return {
    title: frontMatter.title || "Blog Post",
    description: frontMatter.description || "A blog post.",
  };
}

// Main page component to render the post (This remains a Server Component)
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { frontMatter, content } = await getPostData(slug);

  // No Hooks in this async Server Component
  // We pass the content down to a Client Component that uses the Hook

  const title = frontMatter.title;
  const date = new Date(frontMatter.date).toLocaleDateString();

  return (
    <article>
      <Intro title={title} />
      <p className="text-gray-600 text-sm mb-8">{date}</p>
      <div className="prose">{content}</div>
    </article>
  );
}
