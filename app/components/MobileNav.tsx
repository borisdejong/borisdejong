'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
  <>
    {/* Hamburger button (inside nav bar) */}
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none focus:ring p-2"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {/* hamburger icon */}
        <div
          className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${
            open ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            open ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>
    </div>

    {/* Dropdown menu (outside nav bar height) */}
    <div
      className={`md:hidden transition-all duration-300 ease-in-out bg-blue-700 text-white px-4 py-2 ${
        open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
      } origin-top`}
    >
      <div className="flex flex-col space-y-2">
        <Link href="/" className="hover:underline" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/about" className="hover:underline" onClick={() => setOpen(false)}>
          About
        </Link>
      </div>
    </div>
  </>
  );
}
