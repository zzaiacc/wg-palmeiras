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
        <div className=" mx-auto lg:flex  w-[80vw]">
          <div className="w-[100%]  lg:mt-[20vh] xs:mt-[6vh]">
            <h3 className="lg:text-[10vw] xs:text-[15vw] text-white  font-black cursor-default lg:text-right xs:text-center">
              {teamByCid.year}{" "}
              <span className="xs:hidden lg:visible">
                {" "}
                <br />{" "}
              </span>{" "}
              {teamByCid.category}
            </h3>
          </div>
          <div className=" absolute bottom-0 left-0">
            <Image
              src={teamByCid.camisaImg}
              width={700}
              height={100}
              alt="endrick"
              className=" lg:w-[30vw] md:w-[450px] z"
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
