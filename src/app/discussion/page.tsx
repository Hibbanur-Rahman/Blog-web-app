"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DiscussionCard } from "@/components/discussionCard";


const Discussion = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 flex justify-between">
        <div className="w-8/12">
          <div className="w-full rounded-xl flex flex-col  justify-center  border p-4 py-8 relative">

              <h4 className="text-3xl text-slate-700 font-semibold">
                Discussions
              </h4>
              <p className="text-slate-400 mt-4">
                Join the conversation: discuss and debate with your favorite
                writers
              </p>

          </div>
          <DiscussionCard/>
          <DiscussionCard/>
          <DiscussionCard/>
        </div>
        <div className="w-4/12"></div>
      </div>
    </div>
  );
};

export default Discussion;
