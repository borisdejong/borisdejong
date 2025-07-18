import type { Metadata } from "next"; // Import the Metadata type
import React from "react";
import Intro from "@/components/Intro";

const PAGE_TITLE = "Contact";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function ContactPage() {
  return (
    <section className="justify-between items-center">
      <Intro
        title={PAGE_TITLE}
        description="You can email me at: inbox[dot]borisdejong.dev"
      />
    </section>
  );
}
