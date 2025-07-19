"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface IntroProps {
  title: string;
  description?: string;
}

function capitalize(item: string) {
  const firstLetter: string = item.slice(0, 1).toUpperCase();
  const restOfWord: string = item.slice(1);
  const capitalizedString = firstLetter.concat(restOfWord.toString());
  return capitalizedString;
}

function returnBreadcrumbs(pathname: string) {
  //pathname = "/about/another-page";
  const breadcrumb = pathname.split("/").filter(Boolean);
  const breadcrumbObject = breadcrumb.map((item: string) => {
    const capitalizedLabel = capitalize(item);
    const mySlug = "/".concat(item.toString());
    return { label: capitalizedLabel, slug: mySlug };
  });
  return breadcrumbObject;
}

const Intro: React.FC<IntroProps> = ({ title, description }) => {
  const pathname = usePathname();
  const breadcrumbs = returnBreadcrumbs(pathname);
  console.log(breadcrumbs);
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((breadcrumb) => {
            return (
              <React.Fragment key={breadcrumb.slug}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={breadcrumb.slug}>
                    {breadcrumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
        {title}
      </h1>
      {description ? (
        <div className="text-gray-500 max-w-2xl text-center">{description}</div>
      ) : null}
    </div>
  );
};

export default Intro;
