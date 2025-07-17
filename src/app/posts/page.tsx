import type { Metadata } from "next"; // Import the Metadata type
import React from "react";
import Intro from "@/components/Intro";

const PAGE_TITLE = "Posts";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function PostsOverview() {
  return (
    <section className="justify-between items-center">
      <Intro title={PAGE_TITLE} />
    </section>
  );
}
