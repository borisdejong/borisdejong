// next.config.js

import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */ // This JSDoc provides type hints in JS
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Create the withMDX function by directly calling createMDX
const withMDX = createMDX({
  // Add your MDX options here, if any
  // For example:
  // extension: /\.mdx?$/,
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // }
});

// Export the merged config using ES Module syntax
export default withMDX(nextConfig);
