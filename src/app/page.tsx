"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { BlogFeedCard } from "@/components/BlogFeedCard";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <main className=" w-full flex  items-center justify-center">
      <div className="w-11/12 flex gap-[20px]">
        <div className="w-8/12">
          <BlogFeedCard />
          <BlogFeedCard />
          <BlogFeedCard />
        </div>
        <div className="w-4/12">
          {/** Drafts items-card */}
          <div className=" w-full rounded-xl border p-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-slate-600 font-semibold">
                Drafts(1)
              </h3>
              <Link href="#" className={buttonVariants({ variant: "outline" })}>
                See all
              </Link>{" "}
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mt-4">
              No title
            </h3>
            <div className="flex gap-[15px] mt-4">
              <p className="text-sm text-slate-500">Edited Aug 21</p>
              <Link href="#" className="flex items-center gap-[10px] ">
                <p className="text-sm text-slate-500 font-semibold hover:underline">
                  Continue editing
                </p>
                <i className="fa-regular fa-pen-to-square text-slate-500"></i>
              </Link>
            </div>
          </div>
          <div className=" w-full rounded-xl border p-4 mt-4">
            <h3 className="font-semibold text-lg">Bookmarks</h3>
            <p className="text-center mt-4 mb-4">Nothing here yet 👋</p>
          </div>
        </div>
      </div>
    </main>
  );
}
