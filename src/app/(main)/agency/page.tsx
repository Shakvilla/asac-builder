import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const authUser = await currentUser();
  if (!authUser) return redirect("/sign-in");
  return <div>Welcome to agency dashboard</div>;
};

export default Page;
