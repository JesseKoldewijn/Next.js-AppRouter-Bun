"use client";

import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetContent,
  SheetDescription,
} from "./generics/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNavbarContent = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-full border-2 bg-black bg-clip-text px-2 py-2 font-extrabold border-stone-600 text-white">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent position="right" size="full" className="bg-base-200">
        <SheetHeader>
          <SheetTitle>JKinsight</SheetTitle>
          <SheetDescription>
            Select a page that you would like to check out!
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Link
            href="/"
            className="rounded-lg border-2 bg-clip-text px-2 py-2 font-extrabold border-stone-600 text-white"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="rounded-lg border-2 bg-clip-text px-2 py-2 font-extrabold border-stone-600 text-white"
          >
            Docs
          </Link>
          <Link
            href="/about"
            className="rounded-lg border-2 bg-clip-text px-2 py-2 font-extrabold border-stone-600 text-white"
          >
            About me
          </Link>
        </div>
        {/* }<SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbarContent;
