"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { useEffect, useState } from "react";

function ProjectDetails() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button>Project Details</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Project details</AlertDialogTitle>
          <AlertDialogDescription>
            This is the tech stack and technologies used in this project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Frontend Tech Stack</CardTitle>
              <CardDescription>
                Next.js, TailwindCss, Shadcn/UI, React Hook Form, Zod, Redux.js,
                RTK Query
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Backend Tech Stack</CardTitle>
              <CardDescription>
                Hono, Prisma, PostgreSQL, Cloudflare Workers, zod
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Custom NPM Package</CardTitle>
              <CardDescription>
                <a href="https://www.npmjs.com/package/@singhjaskaran/accuknox-common">
                  https://www.npmjs.com/package/@singhjaskaran/accuknox-common
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
          <p className="text-sm font-bold">
            The login details are autofilled. Just click login button and test
            the application.
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ProjectDetails;
