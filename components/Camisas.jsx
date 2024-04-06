import React from "react";
import Image from "next/image";
import Link from "next/link";

const Camisas = ({ featuredShirts }) => {
  return (
    <Link href={`${featuredShirts.cid}`}>
      <div className="group  ">
        <div className="relative lg:h-[226px] lg:w-[260px] xs:w-[300px] xs:h-[170px] bg-white pt-[21px] px-[23px] leading-none border-green-400 border-2 ">
          <Image
            src={featuredShirts.photo}
            width={300}
            height={300}
            alt="flaco"
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="bg-green-400 px-[26px] py-[17px] lg:w-[260px] text-white font-black flex justify-between">
          <h4>{featuredShirts.year} </h4>
          <h4>{featuredShirts.category} </h4>
        </div>
      </div>
    </Link>
  );
};

export default Camisas;
