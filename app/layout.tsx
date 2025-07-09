import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Clean Oceans Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* Add more links here later */}
          </ul>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
