"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-end pl-3 mb-14">
        <h1
          className={cn(
            "text-2xl font-bold flex text-white",
            montserrat.className
          )}
        >
          Gen
        </h1>
        <div className="relative w-4 h-16 mr-4 flex">
          <Image
            width={16}
            height={32}
            src="/logo.png"
            alt="Logo"
            className="self-end pb-[6px] ml-[2px]"
          />
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
