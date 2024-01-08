import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  return (
    <nav className="w-full bg-black h-[20vh] flex items-center justify-center z-10 mb-1">
      <div className="hover:scale-105 duration-700 ">
        <Link href="/">
          <h2 className="text-[4.4rem] font-bold text-white">WEARING GLORY</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
