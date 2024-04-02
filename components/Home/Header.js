"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "../icons/Search";
import Bars2 from "../icons/Bars2";
import ShoppingCart from "../icons/ShoppingCart";
import UserAuth from "../user-auth/UserAuth";
import { HiOutlineUser } from "react-icons/hi";
import ChevronDown from "../icons/ChevronDown";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastScrollTop = 500;

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      setHideNav(currentScroll > lastScrollTop);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    // Perform search based on searchQuery
    // For example:
    // router.push(`/search?q=${searchQuery}`);
  };

  return (
    <header
      className={`px-4 m-0 h-[15vh] w-full grid fixed top-0 z-10 bg-white/95 transition-transform duration-300 ${
        hideNav ? "-translate-y-full" : ""
      } `}
    >
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-primary font-bold tracking-wider text-2xl cursor-pointer">
              FusspoT!
            </span>
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/cart">
              <span className="relative cursor-pointer">
                <ShoppingCart />
                {/* You can show cart count here if needed */}
              </span>
            </Link>
            <button
              className="p-1 border-0"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <Bars2 />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
            className="p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
          >
            <UserAuth />
          </div>
        )}
      </div>
      <nav className="hidden md:grid  grid-cols-[1fr,1fr,6fr,3fr,2fr] gap-16 items-center text-gray-500 font-semibold">
        <Link href="/">
          <span className="text-primary font-bold tracking-wider text-2xl cursor-pointer">
            FusspoT!
          </span>
        </Link>
        <Link className="flex gap-2" href={""}>
          <span>Location</span>
          <ChevronDown />
        </Link>
        <div className="input">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span onClick={handleSearch}>
            <Search className="w-6 h-6" />
          </span>
        </div>
        <UserAuth />
        <Link className="flex justify-center items-center gap-2" href="/cart">
          <span className="relative cursor-pointer">
            <ShoppingCart />
          </span>
          <span>Cart</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
