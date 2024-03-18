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
    <div className="relative h-screen xs:h-[340px] lg:h-screen md:h-[70vh] sm:h-[60vh]">
      <div
        className="h-screen  w-[100vw] bg-cover md:h-[70vh]  lg:h-screen xs:h-[340px] sm:h-[60vh]"
        style={{
          backgroundImage: `url(${bgHero.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />

        <div className="text-center mt-[50px]  uppercase lg:leading-[50px] tracking-tighter xs:leading-3 md:leading-6 sm:leading-5 text-green-500">
          <h1 className="text-[2vw] font-bold">Nunca dê como morto </h1> <br />
          <h1 className="text-[9vw] font-black"> um gigante</h1>
        </div>
      </div>

      <div className="flex">
        <Image
          src={endrick}
          className="absolute bottom-0 lg:left-[10%] lg:w-[30vw] xs:w-[41%] left-3 "
        />
        <Image
          src={dudu1957}
          className="absolute bottom-0 left-0 lg:w-[16vw] xs:w-[20%]"
        />
        <Image
          src={marcos}
          className="absolute bottom-0 lg:left-[21%] lg:w-[24vw] xs:w-[30%] xs:left-[14%]"
        />
        <Image
          src={veiga}
          className="absolute bottom-0 lg:right-[15%] lg:w-[30vw] xs:w-[42%] xs:right-10"
        />
        <Image
          src={ademirDaGuia}
          className="absolute bottom-0 lg:right-[35%] lg:w-[35vw] xs:w-[48%] xs:right-[30%]"
        />
        <Image src={djalma} className="absolute bottom-0 w-[18vw] right-0" />
        <Image
          src={dudu}
          className="absolute bottom-0 lg:right-[1.3%] lg:w-[35vw] xs:w-[40%] xs:right-[1.3%]"
        />
      </div>

      <div className="w-[100vw] bg-green-200 absolute bottom-[-5%] -rotate-1 lg:h-[9vh]  xs:h-[3vh]  md:h-[5vh] flex justify-center ">
        <h2 className="lg:text-[6vh] xs:text-[2vh] md:text-[4vh] font-black leading-tight text-center whitespace-nowrap text-green-900 ">
          PALMEIRAS PALMEIRAS PALMEIRAS PALMEIRAS PALMEIRAS PALMEIRAS
        </h2>
      </div>
    </div>
  );
};

export default Hero;
