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
import Link from "next/link";

import ProfileImg from "../assets/images/user-profile-img.jpg";
import BlogFeedImg from "../assets/images/blog-feed-img.jpg";
import ChatIcon from "../assets/images/chat-logo.svg";

export function BlogFeedCard() {
  return (
    <Card className="p-6 my-4 rounded-xl">
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
      <div className="flex w-full mt-4 gap-[10px]">
        <div className="w-8/12">
          <h3 className="font-semibold text-xl">
            Things you need to know about Graph Algorithms
          </h3>
          <p className="text-slate-500 mt-2">
            Let&apos;s start learning about Graph Algorithms! Graph Algorithm A graph
            is a nonlinear data structure consisting of finite sets of Vertices
            (nodes) and a set of Edges which connect a pair of...
          </p>
        </div>
        <div className="w-4/12 flex p-2 py-0">
          <Image src={BlogFeedImg} alt="" className="rounded-xl h-[120px]" />
        </div>
      </div>
      <div className="flex w-full justify-between mt-4">
        <div className="flex gap-[20px] items-center">
          <Link href="#" className="flex items-center gap-[10px]">
            <i className="w-auto fa fa-regular fa-comments text-lg text-slate-500"></i>
            <p className="text-slate-500 text-sm font-semibold hover:underline">Discuss</p>
          </Link>
          <p className="text-slate-500 text-sm ">24 likes</p>
          <p className="text-slate-500 text-sm ">101 reads</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="rounded-3xl bg-slate-100 flex items-center justify-center px-2 py-1 h-min">
            <p className="m-0 p-0 text-sm">Python Data Structure</p>
          </div>
          <div className="rounded-3xl bg-slate-100 flex items-center justify-center px-2 py-1 h-min">
            <p className="m-0 p-0 text-sm">algorithms</p>
          </div>
          <i className="bi bi-bookmark-plus text-2xl hover:cursor-pointer"></i>
        </div>
      </div>
    </Card>
  );
}
