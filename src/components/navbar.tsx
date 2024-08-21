import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logoBlack from "../assets/images/logo-black.svg";

const Navbar = () => {
  return (
    <div className="w-full flex items-center bg-[rgb(245 247 250 / 0.7)] shadow-sm">
      <div className="w-11/12 flex justify-between">
        <Image
          src={logoBlack}
          alt="logo"
          className="h-[100px] w-[200px] m-0 p-0 "
        />
        <div className="w-auto flex items-center">
          {/* Wrap NavigationMenuItem within a NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  My Feed
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Discussions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="w-auto flex items-center">
                <i className="bi bi-search"></i>
                <i className="bi bi-moon"></i>
                <Link href='/login'>
                Log in
                </Link>
                <Link href='/login'>
                Sign up
                </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
