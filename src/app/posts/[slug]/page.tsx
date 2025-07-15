import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'; // 'rsc' for React Server Components
import { notFound } from 'next/navigation';
import { useMDXComponents } from '@/mdx-components'; // Import your MDX components mapper

// Function to get all post slugs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  // Map filenames (e.g., 'my-first-post.mdx') to slugs (e.g., 'my-first-post')
  const slugs = filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));

  return slugs;
}

// Function to fetch content for a single post
async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), 'src/content', 'posts', `${slug}.mdx`);

  let fileContent;
  try {
    fileContent = fs.readFileSync(fullPath, 'utf-8');
  } catch (error) {
    console.error(`Failed to read post file: ${fullPath}`, error);
    notFound(); // Display 404 page if file not found
  }

  // Use gray-matter to parse the frontmatter and content
  const { data: frontMatter, content } = matter(fileContent);

  return {
    frontMatter: frontMatter as Record<string, any>, // Type it appropriately
    content,
  };
}

// Generate metadata for the page (for SEO)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { frontMatter } = await getPostData(slug);

  return {
    title: frontMatter.title || 'Blog Post',
    description: frontMatter.description || 'A blog post.',
  };
}

// Main page component to render the post
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { frontMatter, content } = await getPostData(slug);

  // Get the custom MDX components for `MDXRemote`
  const components = useMDXComponents({}); // Pass an empty object if you don't have base components to override

  return (
    <article className="py-8">
      {/* You can display frontmatter here if you want it outside the MDX content */}
      <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
        <p className="text-gray-600 text-sm mb-6">
            {new Date(frontMatter.date).toLocaleDateString()} by {frontMatter.description}
        </p>
    <div className="prose">
      <MDXRemote source={content} components={components} />
    </div>

    </article>
  );
}