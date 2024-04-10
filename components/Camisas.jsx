import React from "react";
import Image from "next/image";
import Link from "next/link";

const Camisas = ({ featuredShirts }) => {
  return (
    <Link href={`${featuredShirts.cid}`}>
      <div className="group hover:scale-105 duration-300">
        <div className="relative lg:h-[226px] lg:w-[260px] xs:w-[300px] xs:h-[170px] bg-transparent pt-[21px] px-[23px] leading-none  border-2 border-green group-hover:border-green duration-300 ">
          <Image
            src={featuredShirts.photo}
            width={300}
            height={300}
            alt={featuredShirts.photo}
            className="absolute bottom-0 right-0 xs:w-[250px]"
          />
        </div>
        <div className="px-[26px] py-[17px] lg:w-[260px] text-white bg-green font-semibold text-[20px] flex justify-between uppercase duration-300 group-hover:text-greenDark">
          <h1>{featuredShirts.category} </h1>
          <h1>{featuredShirts.year} </h1>
        </div>
      </div>
    </Link>
  );
};

export default Camisas;
