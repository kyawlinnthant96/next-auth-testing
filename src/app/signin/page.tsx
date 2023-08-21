"use client";
import Image from "next/image";
import GoogleSignInButton from "../_components/GoogleSignInButton";
import { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    console.log("submit", email, password);
  };
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[60%]  flex rounded-xl overflow-hidden">
        <div className="flex-[.5] text-slate-900 items-center bg-white p-8 flex flex-col space-y-3">
          <h1 className="font-semibold text-xl">Sign In</h1>
          <form
            className="w-full flex flex-col px-4 gap-y-4"
            onSubmit={handleSubmit}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="border-2 border-slate-900 text-sm px-4 py-2 rounded-md"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="border-2 border-slate-900 px-4 text-sm py-2 rounded-md"
            />

            <button className="bg-amber-500 text-white py-2 rounded-md text-sm">
              Sign In
            </button>
            <span className="my-2 text-sm text-slate-900 text-center">or</span>
            <GoogleSignInButton />
          </form>
        </div>
        <div className="flex-[.5] relative min-h-[400px] text-slate-900 items-center bg-amber-500 p-8 flex flex-col space-y-3">
          <Image
            src="/Fingerprint-cuate.svg"
            alt="authsvg"
            className="inline-block"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
