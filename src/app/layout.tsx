import '@/app/globals.css'; // This path uses your alias, which is correct
import NavigationMenu from '@/components/NavigationMenu';

export const metadata = {
  title: 'Boris de Jong',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='relative sm:p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen text-zinc-800 selection:bg-zinc-900 selection:text-white dark:bg-zinc-900 dark:text-zinc-200'>
        <NavigationMenu />
        <main className="mx-auto max-w-4xl space-y-16 p-2 p-4 sm:p-0 pt-10 sm:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
