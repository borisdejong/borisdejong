import Link from 'next/link';

export default function DesktopNav() {
  return (
    <ul className="hidden md:flex space-x-6">
      <li>
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </li>
    </ul>
  );
}
