import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../public/arrow.svg";
import camisaBackground from "../public/camisa_wallpaper.png";
import NavBar from "./NavBar";

const CamisaDetails = ({ teamByCid }) => {
  const titulos = teamByCid.titulos;
  return (
    <div className="items-center justify-center w-screen ">
      <div
        className="h-screen w-[100vw] bg-cover  relative"
        style={{
          backgroundImage: `url(${camisaBackground.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <div className=" mx-auto  w-[80vw]">
          <div className="lg:mt-[20vh] xs:mt-[6vh] justify-between flex w-[100%] lg:text-[10vw] xs:text-[10vw] text-white  font-black cursor-default">
            <div>
              <h3>{teamByCid.year} </h3>
            </div>
            <div>
              <h3> {teamByCid.category}</h3>
            </div>
          </div>
          <div className="absolute bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 sm:left-1/2  sm:transform sm:-translate-x-1/2 md:left-1/2  md:transform md:-translate-x-1/2 xs:left-1/2  xs:transform xs:-translate-x-1/2">
            <Image
              src={teamByCid.camisaImg}
              width={1000}
              height={100}
              alt="endrick"
              className=" lg:w-[30vw] md:w-[90w] sm:w-[60vw] xs:w-[80vw]"
            />
          </div>
        </div>
        {teamByCid.nextShirt ? (
          <Link href={teamByCid.nextShirt}>
            <h1
              className=" text-[40px] fixed  bottom-0 right-0 px-[100px] py-[30px] text-green-400 hover:text-green-800 flex gap-5"
              style={{ color: "#05FF00" }}
            >
              <span className="xs:hidden">
                {teamByCid.nextCategory} | {teamByCid.nextYear}{" "}
              </span>
              <Image src={arrow} />
            </h1>
          </Link>
        ) : null}

        {teamByCid.prevShirt ? (
          <Link href={teamByCid.prevShirt}>
            <h1
              className=" text-[40px] fixed  bottom-0 right-left px-[100px] py-[30px] text-green-400 hover:text-green-800 flex gap-5"
              style={{ color: "#05FF00" }}
            >
              <Image src={arrow} className="rotate-180" />
              <span className="xs:hidden">
                {teamByCid.prevCategory} | {teamByCid.prevYear}{" "}
              </span>
            </h1>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CamisaDetails;
