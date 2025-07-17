// src/components/MDXRemoteClient.tsx (Create this file!)
"use client"; // <--- This component MUST be a Client Component
import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "@/mdx-components"; // Adjust path to your mdx-components.tsx

interface MDXRemoteClientProps {
  // This type is the result of next-mdx-remote/serialize
  source: MDXRemoteSerializeResult;
}

const MDXRemoteClient: React.FC<MDXRemoteClientProps> = ({ source }) => {
  // Get your custom MDX components from the hook
  const components = useMDXComponents({}); // Pass an empty object or default components if needed

  return <MDXRemote {...source} components={components} />;
};

export default MDXRemoteClient;
