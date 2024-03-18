import React from "react";
import Image from "next/image";
import Link from "next/link";

const Camisas = ({ featuredShirts }) => {
  return (
    <Link href={`${featuredShirts.cid}`}>
      <div className=" group">
        <div className="relative lg:h-[226px] lg:w-[400px] xs:w-[300px] xs:h-[170px] bg-white pt-[21px] px-[23px] leading-none hover:border-green-600 border-2 duration-500 hover:bg-green-200 hover:scale-[99%]">
          <Image
            src={featuredShirts.photo}
            width={300}
            height={300}
            alt="flaco"
            className="absolute bottom-0 right-0 xs:w-[200px] lg:w-[300px]"
          />
          <span className="text-green-600">
            <h2 className="font-semibold text-[50px] ">
              {featuredShirts.category}
            </h2>
            <h2 className="text-[40px]">{featuredShirts.year}</h2>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Camisas;
