import './globals.css';
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
        <nav className="bg-blue-600 text-white px-4 py-2 sticky top-0 z-50 shadow-md">
          <div className="flex justify-between items-center h-12">
            <div className="text-lg font-bold">Clean Oceans Project</div>
            <DesktopNav />
            <MobileNav />
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
