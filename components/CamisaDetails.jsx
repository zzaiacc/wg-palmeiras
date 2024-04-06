import Image from "next/image";
import Link from "next/link";
import React from "react";

const CamisaDetails = ({ teamByCid }) => {
  const titulos = teamByCid.titulos;
  return (
    <div className="flex items-center justify-center h-full relative w-screen">
      <div>
        <h1 className="lg:text-[20vw] fixed inset-y-0 flex items-center text-right text-white opacity-20  ml-[100px] tracking-widest">
          {teamByCid.year}
        </h1>
      </div>
      <div className="w-[45%]">
        <Image
          src={teamByCid.camisaImg}
          width={700}
          height={100}
          alt="endrick"
          className="absolute bottom-0 left-[7%] md:w-[450px] lg:w-[700px]"
        />
      </div>
      {teamByCid.nextShirt ? (
        <Link href={teamByCid.nextShirt}>
          <p className="text-white text-[10rem] fixed inset-y-0 flex items-center right-0 px-10 md:px-20 lg:px-40">
            {">"}
          </p>
        </Link>
      ) : null}

      {teamByCid.prevShirt ? (
        <Link href={teamByCid.prevShirt}>
          <p className="text-white text-[10rem] fixed inset-y-0 flex items-center left-0 px-2 md:px-8 lg:px-5">
            {"<"}
          </p>
        </Link>
      ) : null}
    </div>
  );
};

export default CamisaDetails;
