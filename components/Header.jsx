import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  /** Note: As I am facing problems with NextAuth, I have temporarily deactivated the authentication feature. */
  return (
    <header className="sticky top-0 z-50 flex h-16 bg-black items-center justify-between px-8 md:px-10">
      <Image
        src="/images/Netflix-Brand-Logo.png"
        width={109}
        height={36}
        style={{ width: "auto", height: "auto" }}
        alt="logo"
        className="cursor-pointer"
        priority
        onClick={() => router.push("/")}
      />
      {/* {session && ( */}
      <div className="hidden ml-10 md:flex items-center space-x-6 text-white">
        <Link href="/" className="header-link group">
          <span className="span">TV Shows</span>
        </Link>
        <Link href="/" className="header-link group">
          <span className="span">Movies</span>
        </Link>
        <Link href="/" className="header-link group">
          <span className="span">Recently Added</span>
        </Link>
        <Link href="/" className="header-link group">
          <span className="span">My List</span>
        </Link>
      </div>
      {/* )} */}
      {/* {status === "authenticated" ? ( */}
      <img
        src="/images/mickey.png"
        alt="avatar"
        className="ml-auto h-9 rounded-full cursor-pointer"
        // onClick={signOut}
      />
      {/* ) : ( */}
      {/* <button
          className="ml-auto uppercase border font-base tracking-wide transition duration-200 text-white text-sm hover:bg-[#e50914] hover:text-white px-6 py-1.5"
          onClick={signIn}
        >
          Sign In
        </button>
      )} */}
    </header>
  );
};

export default Header;
