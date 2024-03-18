import Image from "next/image";
import React from "react";

const CamisaDetails = ({ teamByCid }) => {
  const titulos = teamByCid.titulos;
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[45%]">
        <Image
          src={teamByCid.camisaImg}
          width={600}
          height={100}
          alt="endrick"
          className="absolute bottom-0 left-[7%]"
        />
      </div>
      <div className=" flex flex-col justify-center items-center mb-[10%] border-2 border-white ">
        <h3 className="text-center  bg-green-200  text-[30px] tracking-widest text-green-900 px-10 py-2 w-[100%]">
          Títulos
        </h3>
        <div>
          {titulos.map((title) => (
            <h4 className="px-10 py-3 text-white">
              {" "}
              {title} {teamByCid.year}{" "}
            </h4>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default CamisaDetails;
