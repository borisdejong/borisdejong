"use client"

import React from 'react'; // React is always needed for JSX
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon?: LucideIcon;
  children: React.ReactNode; // The content inside the link (e.g., "Home")
  className?: string;
  target?: string;
}

// Define the component as a functional component
const NavLink: React.FC<NavLinkProps> = ({ href, icon: IconComponent, children, className, target }) => {
    // 1. Get the router object
    const pathname = usePathname();
    // 2. Compare the current page's path with the link's href
    const isActive = pathname === href;

    const activeClasses = 'border-b-2 border-dotted border-zinc-500';
    const defaultClasses = 'pb-0.5';

  return (
    <Link href={href} target={target} className={`${isActive ? activeClasses : defaultClasses} ${className || ''}`}>
        {IconComponent && ( // Check if IconComponent exists (is not null, undefined, false, 0, or empty string)
          <IconComponent className="size-4" />
      )}
        {children}
    </Link>
  );
};

export default NavLink;