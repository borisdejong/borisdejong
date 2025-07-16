"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navLinks";
import NavLink from "@/components/NavLink";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";

import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  const [isToggleEnabled, setIsToggleEnabled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const htmlElement = window.document.documentElement;
      htmlElement.classList.toggle("dark", isToggleEnabled);
    }
  }, [isToggleEnabled]);

  return (
    <nav className="sticky left-0 top-0 z-40 w-full sm:top-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-zinc-200 dark:border-gray-700 bg-white dark:bg-black p-4 py-2 text-sm backdrop-blur transition-colors duration-150 sm:rounded-lg sm:border lg:px-6">
        <div className="text-lg font-bold">
          <Link
            className="group flex items-center justify-center rounded-full bg-white bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 bg-[length:400%_400%] transition hover:scale-105 hover:animate-border focus:outline-none focus:ring-0 "
            href="/"
          >
            <div className="rounded-full p-[3px] transition-transform group-hover:scale-105">
              <Image
                src="/images/profile-picture.jpg" // Path to your logo in the public folder
                alt="Boris de Jong" // Important for SEO and accessibility
                width={40} // Specify the intrinsic width of the image (in pixels)
                height={40} // Specify the intrinsic height of the image (in pixels)
                className="block h-10 w-10 rounded-full"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center flex-row gap-4">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                return (
                      <NavLink 
                        href={link.url} 
                        target={link.target}
                        className="
                        text-black hover:text-gray-800
                        dark:text-white dark:hover:text-white-800
                        transition-all duration-200 ease-in-out
                        whitespace-nowrap
                        block
                        ">
                          {link.title}
                      </NavLink>                 
                );
              })}
              </ul>
              </nav>
          {!isToggleEnabled ? (
            <Moon className="h-4 w-4 transition-colors" />
          ) : (
            <Sun className="h-4 w-4 transition-colors" />
          )}

          <Switch
            checked={isToggleEnabled}
            onCheckedChange={setIsToggleEnabled}
            aria-label="Toggle icon visibility"
          />
        </div>
      </div>
    </nav>
  );
}
