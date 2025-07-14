// next.config.ts
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  // Add your MDX options here, if any
  // For example:
  // extension: /\.mdx?$/, // This is the default, so often not needed
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // }
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);