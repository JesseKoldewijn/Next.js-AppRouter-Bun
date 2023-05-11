"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/layout/navigation-menu";
import MobileNavbarContent from "./mobileNavbarContent";
// import BoringSwitch from "./generics/boringSwitch";

const Navbar = () => {
  const LinkComponent = ({
    Href,
    Title,
    variantPlain,
  }: {
    Href: string;
    Title: string;
    variantPlain?: boolean;
  }) => {
    if (variantPlain !== true) {
      return (
        <>
          <Link href={Href} legacyBehavior passHref>
            <NavigationMenuLink
              className={"my-auto " + navigationMenuTriggerStyle()}
            >
              {Title}
            </NavigationMenuLink>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link href={Href} className="my-auto rounded-lg font-extrabold ">
            {Title}
          </Link>
        </>
      );
    }
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[2] flex w-full bg-[rgba(0,0,0,0.75)] px-4 py-3">
      <div className="navbar-start hidden text-xl lg:flex">
        <LinkComponent Href="/" Title="App Router BunStyle" variantPlain />
      </div>
      <div className="navbar-start flex text-xl lg:hidden">
        <MobileNavbarContent />
      </div>
      <div className="navbar-center hidden gap-2 lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <LinkComponent Href="/" Title="Home" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LinkComponent Href="/docs" Title="Docs" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LinkComponent Href="/about" Title="About me" />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="text-22xl navbar-center flex lg:hidden">
        <LinkComponent Href="/" Title="Next.js AR Bun" variantPlain />
      </div>
      <div className="navbar-end mr-0 flex gap-2">{/* <BoringSwitch /> */}</div>
    </div>
  );
};

export default Navbar;
