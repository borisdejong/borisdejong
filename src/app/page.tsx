import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <section className="justify-between items-center">
      <div className="flex max-w-160 mx-auto flex-col gap-4">
        <h1 className="text-4xl font-bold">Boris de Jong</h1>
        <ul className="max-w-200">
          <li>💼 Current: Product Manager @ Gomibo (a.k.a. Belsimpel)</li>
          <li>🎓 Learning JavaScript and React, all at once.</li>
          <li>🏠 Living in Groningen, the Netherlands</li>
          <li>
            <Link href="https://www.linkedin.com/in/boris-de-jong/">LinkedIn</Link>
          </li>
        </ul>
        <div className="flex flex-row">
          <Link
            className="hover:underline text-gray-600 hover:text-gray-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium transition-colors duration-200"
            href="/about"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
