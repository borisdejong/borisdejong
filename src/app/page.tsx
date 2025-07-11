import Image from 'next/image';

export default function HomePage() {
  return (
      <section className="justify-between items-center">
        <div className="flex max-w-160 mx-auto flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/profile-picture.jpg"
              alt="Boris de Jong"
              width={75}
              height={75}
              className="block h-25 w-25 sm:h-40 sm:w-40 rounded-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Hi 👋 My name is Boris.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        
      </section>
  );
}
