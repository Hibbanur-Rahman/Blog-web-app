import profilePic from "@/assets/images/dummy-profile-img.png";
import Image from "next/image";
import { GrEdit } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import BlogFeedImg from "@/assets/images/blog-feed-Img.jpg";
import { Trash2 } from "lucide-react";
import { TbEdit } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
const Profile = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-8/12 flex flex-col items-center border rounded-lg p-4 px-16">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-[20px]">
            <Image
              src={profilePic}
              alt="profile picture"
              className="w-[100px] h-[100px] rounded-full border shadow-2xl"
            />
            <div className="">
              <h2 className="text-2xl font-semibold">HIBBANUR RAHMAN</h2>
              <p className="text-gray-500 text-lg">Web developer</p>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="rounded-full border h-min  p-2 px-3 shadow-lg cursor-pointer hover:bg-slate-100">
              <i className="bi bi-share m-0 p-0 text-xl"></i>
            </div>
            <div className="flex items-center gap-[10px] cursor-pointer justify-center px-4  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-3xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
              <GrEdit className="text-white text-2xl" />
              <p className="text-white text-lg">Edit</p>
              <BottomGradient />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[10px] border rounded-xl p-4 mt-16 justify-center items-center">
          <MdOutlineCalendarMonth className="text-gray-400 text-xl" />{" "}
          <p className="text-lg text-gray-400 text-center">
            Member Since Jan, 2023
          </p>
        </div>
        <div className="flex flex-col w-full mt-4 rounded-xl border p-4">
          <div className="w-full flex justify-between items-center border-b-2 pb-3">
            <h3 className="text-2xl font-semibold">Writes at</h3>
            <div className="flex gap-[10px]">
              <CiSettings className="text-3xl" />
              <p className="text-lg text-gray-600">Actions</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center pt-2 pb-2 border-b-2">
            <div className="flex gap-[20px] w-8/12">
              <Image
                src={BlogFeedImg}
                alt=""
                className="w-[200px] h-[100px] rounded-xl"
              />
              <div className="">
                <h2 className="text-xl font-semibold">
                  Things you need to know about Graph Algorithms
                </h2>
                <p className="text-gray-500">Aug 23(19 min ago)</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center ">
              <FaRegEye className="cursor-pointer text-3xl text-gray-500"  />
              <TbEdit className="cursor-pointer text-3xl text-gray-500" />
              <Trash2 color="#ef4444"  className="cursor-pointer text-4xl" />
            </div>
          </div>
          <div className="w-full flex justify-between items-center pt-2 pb-2 border-b-2">
            <div className="flex gap-[20px] w-8/12">
              <Image
                src={BlogFeedImg}
                alt=""
                className="w-[200px] h-[100px] rounded-xl"
              />
              <div className="">
                <h2 className="text-xl font-semibold">
                  Things you need to know about Graph Algorithms
                </h2>
                <p className="text-gray-500">Aug 23(19 min ago)</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center ">
              <FaRegEye className="cursor-pointer text-3xl text-gray-500"  />
              <TbEdit className="cursor-pointer text-3xl text-gray-500" />
              <Trash2 color="#ef4444"  className="cursor-pointer text-4xl" />
            </div>
          </div>
          <div className="w-full flex justify-between items-center pt-2 pb-2 border-b-2">
            <div className="flex gap-[20px] w-8/12">
              <Image
                src={BlogFeedImg}
                alt=""
                className="w-[200px] h-[100px] rounded-xl"
              />
              <div className="">
                <h2 className="text-xl font-semibold">
                  Things you need to know about Graph Algorithms
                </h2>
                <p className="text-gray-500">Aug 23(19 min ago)</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center ">
              <FaRegEye className="cursor-pointer text-3xl text-gray-500"  />
              <TbEdit className="cursor-pointer text-3xl text-gray-500" />
              <Trash2 color="#ef4444"  className="cursor-pointer text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default Profile;
