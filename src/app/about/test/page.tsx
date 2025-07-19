import type { Metadata } from "next"; // Import the Metadata type
import React from "react";
import Intro from "@/components/Intro";
import resumeData from "@/data/resumeData.json";
import {
  ResumeData,
  EducationEntry,
  WorkExperienceEntry,
} from "@/types/resume";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

const PAGE_TITLE = "Test";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function AboutPage() {
  const data: ResumeData = resumeData;

  return (
    <div>
      <section className="justify-between items-center mb-6 sm:mb-12">
        <Intro title={PAGE_TITLE} />
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-gray-400 uppercase text-center mb-3">
              Education
            </h2>
            <div className="flex flex-col items-center mb-8">
              <Separator
                orientation="horizontal"
                className="my-1 w-10 h-1 bg-sky-700"
              />
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              {data.education.map((entry: EducationEntry) => (
                <Card key={entry.id}>
                  <CardHeader>
                    <CardTitle className="sm:flex sm:flex-row sm:justify-between sm:items-center">
                      <h3 className="text-lg font-semibold">{entry.degree}</h3>
                    </CardTitle>
                    <CardDescription>
                      <div>
                        {entry.institution} • {entry.startDate} -{" "}
                        {entry.endDate}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{entry.description}</p>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    <p>{entry.location}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
