"use client";

import { SignInButton, SignedIn, UserButton } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/nextjs";
import {
  Briefcase,
  HomeIcon,
  MessagesSquare,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex items-center max-w-6xl mx-auto m-3">
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
      />
      <div className="flex-1">
        <form className="flex bg-gray-100 items-center space-x-1 p-2 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none flex-1"
          />
        </form>
      </div>
      <div className="flex items-center space-x-4 px-6">
        <Link href="/" className="icon">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>
        <Link href="" className="icon hidden md:flex">
          <UserIcon className="h-5" />
          <p>Network</p>
        </Link>
        <Link href="" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>
        <Link href="" className="icon">
          <MessagesSquare className="h-5" />
          <p>Messages</p>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
