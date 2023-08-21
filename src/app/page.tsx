"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center text-white p-24">
      <div className="mt-8 w-1/2 h-[400px] relative">
        <Image
          src="/Welcome-bro.svg"
          alt="welcomesvg"
          className="inline-block"
          fill
        />
      </div>
    </main>
  );
}
