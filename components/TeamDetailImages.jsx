import React from "react";

function TeaetailImages({
  imageHome,
  imageAway,
  imageThird,
  imageFourth,
  imageSpecial1,
  imageSpecial2,
  imageSpecial3,
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        <div className="flex flex-col text-center hover:scale-110 duration-500 ">
          <span className=" p-1 font-semibold bg-black text-white">Home</span>
          <img
            src={imageHome}
            width={200}
            height={225}
            className="border-4 border-black"
          />
        </div>
        <div className="flex flex-col text-center  hover:scale-110 duration-500 ">
          <span className=" p-1 font-semibold bg-black text-white">Away</span>
          <img
            src={imageAway}
            width={200}
            height={225}
            className="border-4 border-black"
          />
        </div>
        {imageThird && (
          <div className="flex flex-col text-center  hover:scale-110 duration-500 ">
            <span className=" p-1 font-semibold bg-black text-white">
              Third
            </span>
            <img
              src={imageThird}
              width={200}
              height={225}
              className="border-4  border-black"
            />
          </div>
        )}
        {imageFourth && (
          <div className="flex flex-col text-center slate-300  hover:scale-110 duration-500">
            <span className=" p-1 font-semibold bg-black text-white">
              Fourth
            </span>
            <img
              src={imageFourth}
              width={200}
              height={225}
              className=" border-black"
            />
          </div>
        )}

        {imageSpecial1 && (
          <div className="flex flex-col text-center slate-300  hover:scale-110 duration-500 ">
            <span
              className=" p-1 font-semibold"
              style={{
                background: "black",
                color: "white",
              }}
            >
              {imageSpecial1.name}
            </span>
            <img
              src={imageSpecial1.image}
              width={200}
              height={225}
              className="border-4 "
              style={{ borderColor: "black" }}
            />
          </div>
        )}
        {imageSpecial2 && (
          <div className="flex flex-col text-center slate-300  hover:scale-110 duration-500 ">
            <span
              className=" p-1 font-semibold"
              style={{
                background: "black",
                color: "white",
              }}
            >
              {imageSpecial2.name}
            </span>
            <img
              src={imageSpecial2.image}
              width={200}
              height={225}
              className="border-4 "
              style={{ borderColor: "black" }}
            />
          </div>
        )}
        {imageSpecial3 && (
          <div className="flex flex-col text-center slate-300  hover:scale-110 duration-500 ">
            <span
              className=" p-1 font-semibold"
              style={{
                background: "black",
                color: "white",
              }}
            >
              {imageSpecial3.name}
            </span>
            <img
              src={imageSpecial3.image}
              width={200}
              height={225}
              className="border-4 "
              style={{ borderColor: "black" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TeaetailImages;
