import Link from 'next/link';
import { navLinks } from '@/data/navLinks';
import Image from 'next/image';
import { Switch } from "@/components/ui/switch"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  return (
    <nav className="sticky left-0 top-0 z-40 w-full sm:top-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-zinc-200 bg-white bg-opacity-50 p-4 py-2 text-sm backdrop-blur transition-colors duration-150 sm:rounded-lg sm:border lg:px-6">
        <div className="text-lg font-bold">
            <Link className="group flex items-center justify-center rounded-full bg-white bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 bg-[length:400%_400%] transition hover:scale-105 hover:animate-border focus:outline-none focus:ring-0 " href="/">
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
        <div className='flex items-center flex-row gap-4'>
        <ul className='flex md:flex space-x-6'>
          {navLinks.map((link) => (
          <li key={link.id}>
            <Link className="
              text-black hover:text-gray-800            /* Text color and hover effect */
              border-b-1 border-dotted border-transparent /* Dotted bottom border, initially transparent */
              hover:border-current                     /* Border becomes visible on hover, matches text color */
              transition-all duration-200 ease-in-out  /* Smooth hover animation */
              whitespace-nowrap                        /* Prevents text from wrapping */
              block  
            " 
            href={link.url} target={link.target}>
              {link.title}
            </Link>
          </li>
        ))}
        </ul>
        <Switch />
        </div>
      </div>
    </nav>
  );
}
