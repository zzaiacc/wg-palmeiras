import React from "react";
import Image from "next/image";
import Link from "next/link";

const Camisas = ({ featuredShirts }) => {
  return (
    <Link href={`${featuredShirts.cid}`}>
      <div className=" group">
        <div className="relative h-[226px] w-[400px] bg-white pt-[21px] px-[23px] leading-none hover:border-green-600 border-2 duration-500">
          <Image
            src={featuredShirts.photo}
            width={300}
            height={300}
            alt="flaco"
            className="absolute bottom-0 right-0"
          />
          <span className="text-green-600">
            <h2 className="font-semibold text-[50px]">
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
