//import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="justify-between items-center">
      <div className="flex max-w-160 mx-auto align-center flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl text-center">Boris de Jong</h1>
        <p className="text-center">Product Manager at Belsimpel</p>
        <Image
          src="/images/me.webp" // Path to your logo in the public folder
          alt="Boris de Jong" // Important for SEO and accessibility
          width={160} // Specify the intrinsic width of the image (in pixels)
          height={160} // Specify the intrinsic height of the image (in pixels)
          className="block h-40 w-40 rounded-full"
        />
      </div>
    </section>
  );
}
