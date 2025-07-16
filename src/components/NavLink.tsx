"use client"

import React from 'react'; // React is always needed for JSX
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import useRouter hook

interface NavLinkProps {
  href: string; // The URL the link should go to (e.g., "/")
  children: React.ReactNode; // The content inside the link (e.g., "Home")
  className?: string;
  target?: string;
}

// Define the component as a functional component
const NavLink: React.FC<NavLinkProps> = ({ href, children, className, target }) => {
    // 1. Get the router object
    const router = useRouter();
    // 2. Compare the current page's path with the link's href
    const isActive = router.pathname === href; // This is the core logic!
    console.log(`Link: ${href}, Current Path: ${router.pathname}, Is Active: ${isActive}`); // For debugging! Remove later.

    const activeClasses = 'text-blue-600 font-bold';
    const defaultClasses = 'text-gray-700 hover:text-gray-900';

  return (
    <Link href={href} target={target} className={`${isActive ? activeClasses : defaultClasses} ${className || ''}`}>
        {children}
    </Link>
  );
};

export default NavLink;