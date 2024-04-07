import React from "react";
import wgLogo from "../public/wg_logo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-[80vw] mx-auto lg:pt-[24px] xs:pt-2  lg:flex justify-between  z-10 bg-transparent">
      <div className="xs:justify-center flex xs:mb-[20px]">
        <a href="/">
          <Image src={wgLogo} className="hover:scale-125 duration-300" />
        </a>
      </div>
      <div className="gap-[5vw] text-white uppercase font-bold flex tracking-tight lg:text-[12px] xs:text-[8px] xs:justify-center">
        <a
          href="#"
          className="hover:text-green-400 duration-300 hover:scale-110 tracking-[5px]"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-green-400 duration-300 hover:scale-110 tracking-[5px]"
        >
          Camisas
        </a>
        <a
          href="#"
          className="hover:text-green-400 duration-300 hover:scale-110 tracking-[5px]"
        >
          Sobre
        </a>
        <a
          href="#"
          className="hover:text-green-400 duration-300 hover:scale-110 tracking-[5px]"
        >
          Contato
        </a>
      </div>
    </div>
  );
};

export default NavBar;
