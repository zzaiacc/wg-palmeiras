import React from "react";
import Image from "next/image";
import bgHero from "/public/allianz-parque_esq.jpeg";
import ademirDaGuia from "../public/ademir_borda.png";
import djalma from "../public/djalma_borda.svg";
import dudu from "../public/dudu_borda.png";
import dudu1957 from "../public/dudu1957_borda.png";
import endrick from "../public/endrick_borda.png";
import veiga from "../public/veiga_borda.png";
import marcos from "../public/marcos_borda.png";
import NavBar from "./NavBar";

const Hero = ({}) => {
  return (
    <div className="relative h-screen xs:h-[40vh] lg:h-screen md:h-[70vh] sm:h-[60vh]">
      <div
        className="h-screen  w-[100vw] bg-cover md:h-[70vh]  lg:h-screen xs:h-[40vh] sm:h-[60vh]"
        style={{
          backgroundImage: `url(${bgHero.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />

        <div className="text-center text-white  mt-[50px]  uppercase lg:leading-[50px] tracking-tighter xs:leading-3 md:leading-6 sm:leading-5">
          <h1 className="text-[2vw] font-bold">Nunca dê como morto </h1> <br />
          <h1 className="text-[9vw] font-black"> um gigante</h1>
        </div>
      </div>

      <div className="flex">
        <Image
          src={endrick}
          className="absolute bottom-0 left-[10%] w-[30vw] "
        />
        <Image src={dudu1957} className="absolute bottom-0 left-0 w-[16vw]" />
        <Image src={marcos} className="absolute bottom-0 left-[21%] w-[24vw]" />
        <Image src={veiga} className="absolute bottom-0 right-[15%] w-[30vw]" />
        <Image
          src={ademirDaGuia}
          className="absolute bottom-0 right-[35%] w-[35vw]"
        />
        <Image src={djalma} className="absolute bottom-0 w-[18vw] right-0" />
        <Image
          src={dudu}
          className="absolute bottom-0 right-[1.3%] w-[35vw] "
        />
      </div>

      <div className="w-[100vw] bg-green-200 absolute bottom-[-5%] -rotate-1 lg:h-[9vh] flex justify-center ">
        <h2 className="text-[6vh] font-black leading-tight text-center whitespace-nowrap text-green-900 ">
          PALMEIRAS PALMEIRAS PALMEIRAS PALMEIRAS PALMEIRAS
        </h2>
      </div>
    </div>
  );
};

export default Hero;
