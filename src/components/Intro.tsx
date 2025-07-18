import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface IntroProps {
  title: string;
  description? : string;
}


const Intro: React.FC<IntroProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/contact">{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-6xl font-bold mb-4">{title}</h1>
      {description ? <div className="text-gray-500 max-w-2xl text-center">{description}</div> : null}
    </div>
  );
};

export default Intro;
