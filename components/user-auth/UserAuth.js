"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";

const UserAuth = () => {
  const { data: session } = useSession();

  // console.log('user login : ', session)
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (session?.user) {
      const name = session?.user?.name || session?.user?.email.split(" ")[0];
      setUserName(name);
    }
  }, [session]);

  if (session) {
    return (
      <>
        <Link className="flex gap-2" href="/profile">
        <FaRegUser size={22} />
          <span>{userName} </span>
          </Link>
      </>
    );
  }
  return (
    <div className="flex gap-4 items-center justify-center">
      <Link href="/signin">Sign In</Link>
      <Link
        href="/signup"
        className="bg-primary rounded-full text-white px-8 py-2"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default UserAuth;
