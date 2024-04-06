import React from "react";
import Image from "next/image";
import Link from "next/link";

const Camisas = ({ featuredShirts }) => {
  return (
    <Link href={`${featuredShirts.cid}`}>
      <div className="group">
        <div
          className="relative lg:h-[226px] lg:w-[260px] xs:w-[300px] xs:h-[170px] bg-white pt-[21px] px-[23px] leading-none  border-2 "
          style={{ borderColor: "#11D200" }}
        >
          <Image
            src={featuredShirts.photo}
            width={300}
            height={300}
            alt="flaco"
            className="absolute bottom-0 right-0"
          />
        </div>
        <div
          className="px-[26px] py-[17px] lg:w-[260px] text-white font-semibold text-[20px] flex justify-between uppercase "
          style={{ background: "#11D200" }}
        >
          <h1>{featuredShirts.category} </h1>
          <h1>{featuredShirts.year} </h1>
        </div>
      </div>
    </Link>
  );
};

export default Camisas;
