//import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="justify-between items-center">
      <div className="flex max-w-160 mx-auto items-center justify-center flex-col gap-4">
        <div className="group flex items-center justify-center rounded-full bg-white bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 bg-[length:400%_400%] transition hover:scale-105 hover:animate-border focus:outline-none focus:ring-0">
          <div className="rounded-full p-[6px] transition-transform group-hover:scale-105">
            <Image
              src="/images/me.webp" // Path to your logo in the public folder
              alt="Boris de Jong" // Important for SEO and accessibility
              width={120} // Specify the intrinsic width of the image (in pixels)
              height={120} // Specify the intrinsic height of the image (in pixels)
              className="block h-30 w-30 rounded-full"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold sm:text-5xl text-center">
          Boris de Jong
        </h1>
        <div className="text-center flex items-center gap-2">
          <span>Product Manager at </span>
          <Image
            src="/images/belsimpel.webp"
            alt="Belsimpel logo"
            width={72}
            height={18}
            className="block w-18 h-[4.5] mt-1"
          />
        </div>
      </div>
    </section>
  );
}
