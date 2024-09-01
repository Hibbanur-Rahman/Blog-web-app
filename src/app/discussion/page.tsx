"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DiscussionCard } from "@/components/discussionCard";
import { Meteors } from "@/components/ui/meteors";
import { buttonVariants } from "@/components/ui/button";

const Discussion = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 flex justify-between gap-[20px]">
        <div className="md:w-8/12 w-full">
          <div className="w-full rounded-xl flex flex-col  justify-center  border p-4 py-8 relative mt-4">

              <h4 className="text-3xl text-slate-700 font-semibold">
                Discussions
              </h4>
              <p className="text-slate-400 mt-4">
                Join the conversation: discuss and debate with your favorite
                writers
              </p>
              <Meteors number={20} />
          </div>
          <DiscussionCard/>
          <DiscussionCard/>
          <DiscussionCard/>
        </div>
        <div className="md:w-4/12  md:flex hidden flex-col">
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
    </div>
  );
};

export default Discussion;
