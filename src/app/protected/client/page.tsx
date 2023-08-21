"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientProtectPage = () => {
  const { data: session } = useSession({
    required: true,
    /*  onUnauthenticated() {
      redirect("/signin?callbackUrl=/protected/client");
    }, */
  });
  return (
    <section className="py-24">
      <h1 className="text-2xl font-bold">
        This is a <span className="text-emerald-500">client side</span>{" "}
        protected page
      </h1>
      <h2 className="mt-4 font-medium">Your logged in as:</h2>
      <p className="mt-4">{session?.user?.name}</p>
    </section>
  );
};

export default ClientProtectPage;
