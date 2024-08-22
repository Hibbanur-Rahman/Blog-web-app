"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { BlogFeedCard } from "@/components/BlogFeedCard";

export default function Home() {
  return <main className=" w-full flex  items-center justify-center">
      <div className="w-11/12 flex">
          <div className="w-8/12">
            <BlogFeedCard/>
          </div>
          <div className="w-4/12"></div>
          
      </div>
  </main>;
}
