const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */ // This JSDoc provides type hints in JS
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// Merge MDX config with Next.js config
const withMDX = createMDX({
  // Add your MDX options here, if any
  // For example:
  // extension: /\.mdx?$/, // This is the default, so often not needed
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // }
});

module.exports = withMDX(nextConfig);