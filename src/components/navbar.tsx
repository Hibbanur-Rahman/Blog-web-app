import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logoBlack from "../assets/images/logo-black.png";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;


const Navbar = () => {
  return (
    <div className="w-full bg-white flex items-center bg-[rgb(245 247 250 / 0.7)] shadow-sm py-3 justify-center fixed z-[10]">
      <div className="w-11/12 md:flex hidden  justify-between">
        <Link href="/">
          <Image
            src={logoBlack}
            alt="logo"
            className="h-[60px] w-[180px] m-0 p-0 "
          />
        </Link>
        <div className="w-auto flex items-center">
          {/* Wrap NavigationMenuItem within a NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    My Feed
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/discussion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    Discussions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="w-auto flex items-center gap-[30px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <i className="bi bi-search text-2xl cursor-pointer"></i>
              </TooltipTrigger>
              <TooltipContent>
                <p>Search</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <i className="bi bi-moon text-2xl cursor-pointer"></i>
              </TooltipTrigger>
              <TooltipContent>
                <p>Dark Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Link
            href="/login"
            className="flex items-center justify-center px-4  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Login
            <BottomGradient />
          </Link>
          <Link
            href="/register"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="w-full md:hidden flex items-center justify-between px-3 py-2">
        <div className="grid grid-cols-2 gap-2">
          <Sheet key="left">
            <SheetTrigger asChild>
              <i className="bi bi-list text-4xl cursor-pointer"></i>
            </SheetTrigger>
            <SheetContent side="left" className="z-[100]">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/">
          <Image src={logoBlack} alt="logo" className="h-[40px] w-[100px]" />
        </Link>
        <i className="bi bi-moon text-3xl cursor-pointer"></i>
        <Link href="/login" className={buttonVariants({ variant: "outline" })}>
          Sign up
        </Link>
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

export default Navbar;
