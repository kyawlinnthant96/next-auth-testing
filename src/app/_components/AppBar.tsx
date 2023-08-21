"use client";

import Link from "next/link";
import SignInButton from "./SignInButton";

export default function AppBar() {
  return (
    <div
      className="h-16 fixed top-0 inset-x-0 bg-transparent flex items-center px-6 mx-6 mt-2 border-b-2 border-white
      justify-between"
    >
      <Link href="/">
        <h1 className="text-2xl font-mono text-amber-500 font-semibold">
          Next Auth
        </h1>
      </Link>
      <nav className="">
        <ul className="flex justify-between items-center gap-8">
          <li className="text-md text-amber-500 font-medium">
            <Link href="/protected/server">protected (server)</Link>
          </li>
          <li className="text-md text-amber-500 font-medium">
            <Link href="/protected/client">protected (client)</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
