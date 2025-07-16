import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g., to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: '32px', color: 'red' }}>{children}</h1>,
    // img: (props) => <Image {...props} alt={props.alt} />,
    ...components, // Keep all default MDX components
  };
}
