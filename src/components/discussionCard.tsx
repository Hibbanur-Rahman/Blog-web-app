"use client";

import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import ProfileImg from "../assets/images/user-profile-img.jpg";
import BlogFeedImg from "@/assets/images/blog-feed-Img.jpg";

export function DiscussionCard() {
  return (
    <Card className="p-6 my-4 rounded-xl w-full">
      <div className="header flex justify-between w-full">
        <div className="flex items-center gap-[10px]">
          <Image
            src={ProfileImg}
            alt=""
            className="rounded-full h-[50px] w-[50px]"
          />
          <div className=" flex flex-col justify-center">
            <h3 className="font-semibold text-black text-lg">John Doe</h3>
            <p className="text-slate-600 text-sm">Aug 23(19 min ago)</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full mt-4 gap-[10px]">
        <div className="md:w-8/12 w-full">
          <h3 className="font-semibold text-xl">
            Things you need to know about Graph Algorithms
          </h3>
          <p className="text-slate-500 mt-2">
            Let&apos;s start learning about Graph Algorithms! Graph Algorithm A
            graph is a nonlinear data structure consisting of finite sets of
            Vertices (nodes) and a set of Edges which connect a pair of...
          </p>
        </div>
        <div className="md:w-4/12 w-full flex p-2 py-0 ">
          <Image
            src={BlogFeedImg}
            alt=""
            className="rounded-xl h-[120px] w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-between mt-4">
        <div className="flex gap-[20px] items-center">
          <Link href="#" className="flex items-center gap-[10px]">
            <i className="w-auto fa fa-regular fa-comments text-lg text-slate-500"></i>
            <p className="text-slate-500 text-sm font-semibold hover:underline">
              Discuss
            </p>
          </Link>
          <p className="text-slate-500 text-sm ">24 likes</p>
          <p className="text-slate-500 text-sm ">101 reads</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className=" rounded-3xl bg-slate-100 md:flex hidden items-center justify-center px-2 py-1 h-min">
            <p className="m-0 p-0 text-sm">Python Data Structure</p>
          </div>
          <div className="rounded-3xl bg-slate-100 md:flex hidden items-center justify-center px-2 py-1 h-min">
            <p className="m-0 p-0 text-sm">algorithms</p>
          </div>
          <i className="bi bi-bookmark-plus text-2xl hover:cursor-pointer"></i>
        </div>
      </div>

      <div className="relative mt-4 flex flex-col justify-center w-full">
        <Image
          src={ProfileImg}
          alt=""
          className="h-[40px] w-[40px] rounded-full absolute left-[10px]"
        />
        <Input
          placeholder="Add a thoughtful comment"
          type="text"
          className="ps-[60px] py-8 w-full"
        />
      </div>
      <div className="w-full mt-8">
        <h3 className="font-semibold text-xl text-slate-600">7 comments</h3>
        <CommentCard />
        <CommentCard />
      </div>
    </Card>
  );
}

const CommentCard = () => {
  return (
    <div className="w-full flex  justify-between my-4 gap-[10px]">
      <Image
        src={ProfileImg}
        alt=""
        className="rounded-full h-[45px] w-[45px]"
      />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className=" flex flex-col justify-center">
            <h3 className="font-semibold text-slate-600 ">John Doe</h3>
            <p className="text-slate-600 text-sm">Mar 21,2024</p>
          </div>
          <i className="bi bi-three-dots text-xl text-slate-500 cursor-pointer"></i>
        </div>
        <p className="text-slate-500 mt-4">
          Hi, Jon. Thanks for this excellent article. i don´t know if I can do
          questions about this article, but... I have an Oracle Apex application
          in hosting in Oracle Cloud and I need to call Google Maps API
          services, but my problem is configuring the wallet. That for me is
          truly nightmare. You know any article about to configure Google Maps
          services in Oracle Wallet OCI? Any help will be grateful. Regards,
          Jairo.
        </p>
        <div className="flex gap-[15px] mt-4 items-center">
          <div className="flex items-center gap-[5px]">
            <i className="bi bi-heart text-slate-500 text-xl cursor-pointer"></i>
            <p className="text-slate-500 text-lg">1</p>
          </div>
          <p className="text-slate-500  font-semibold hover:cursor-pointer hover:underline">Reply</p>
          <p className="text-slate-500 ">1 reply</p>

        </div>
      </div>
    </div>
  );
};
