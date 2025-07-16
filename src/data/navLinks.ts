import { LucideIcon, House } from "lucide-react";

export interface NavLink {
  id: string; // Unique identifier for the link
  title?: string; // Text displayed in the navigation
  url: string; // The URL the link points to
  icon?: LucideIcon; // Optional: for an icon (e.g., Font Awesome class, SVG path)
  target?: "_blank" | "_self" | "_parent" | "_top"; // Optional: for link target (e.g., open in new tab)
  external?: boolean; // Optional: true if it's an external link
  disabled?: boolean; // Optional: true if the link should be disabled
  children?: NavLink[]; // Optional: for dropdowns or nested menus - KEPT IN INTERFACE
}

export const navLinks: NavLink[] = [
  {
    id: "home",
    url: "/",
    icon: House,
  },
  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "posts",
    title: "Posts",
    url: "/posts",
  },
  {
    id: "prompt_library",
    title: "Prompt Library",
    url: "/prompt-library",
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact-us",
  },
];
