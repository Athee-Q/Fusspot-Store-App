"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const UserTabs = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const path = usePathname();
  // console.log(path)
  return (
    <div className="pt-4 my-8 sm:max-w-xs text-lg bg-indigo-950/70 flex flex-col justify-evenly gap-1 rounded-xl text-slate-200 tabs">
      <Link className={path === "/orders" ? "active" : ""} href={"/orders"}>
        Orders
      </Link>

      <Link className={path === "/payments" ? "active" : ""} href={"/payments"}>
        Payment
      </Link>

      <Link
        className={path === "/profile/address" ? "active" : ""}
        href={`/profile/address`}
      >
        Address
      </Link>

      <Link
        className={path === "/settings" ? "active" : ""}
        // className={path.includes("/settings") ? "active" : ""}
        href={"/settings"}
      >
        Settings
      </Link>

      <Link
        className={path === "/merchant" ? "active" : ""}
        // className={path.includes("/merchant") ? "active" : ""}
        href={"/merchant"}
      >
        Merchant
      </Link>

      <button
        className="w-64 h-10 mb-4 mr-4 flex items-center justify-center border-none bg-slate-200 text-primary"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserTabs;
