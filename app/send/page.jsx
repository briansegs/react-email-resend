"use client";

import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Message Sent.");

const data = {
  name: "RedMan",
  email: "reddot@wutang.com",
  subject: "Let's make a banger together!",
  message:
    "Bring Method Man and the crew to my studio tomorrow. I have snacks and juice boxes if anyone gets peckish. Any time after daybreak is cool to come by.",
};

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error("Message could not be sent.");
      } else {
        notify();
      }
      return res.json();
    });
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Toaster />
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Link href="/">
          <button className="text-white bg-black text-2xl rounded-lg px-8 py-6">
            Home
          </button>
        </Link>

        <button
          className="border-2 border-slate-300 text-2xl rounded-lg px-8 py-6"
          type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default page;
