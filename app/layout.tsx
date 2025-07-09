import './globals.css';
import Link from 'next/link';
import MobileNav from './components/MobileNav';
import DesktopNav from './components/DesktopNav';

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
        <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Clean Oceans</div>
            <DesktopNav />
            <MobileNav />
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
