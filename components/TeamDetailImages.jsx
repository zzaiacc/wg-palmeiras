import React from "react";

function TeamDetailImages({
  imageHome,
  imageAway,
  imageThird,
  imageFourth,
  imageSpecial1,
  imageSpecial2,
  imageSpecial3,
  colorHome,
  colorAway,
  colorThird,
  colorFourth,
  colorHomeTwo,
  colorAwayTwo,
  colorThirdTwo,
  colorFourthTwo,
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col text-center hover:scale-110 duration-500 rounded-md">
          <span
            className="rounded-t-md p-1 font-semibold"
            style={{ background: `${colorHome}`, color: `${colorHomeTwo}` }}
          >
            Home
          </span>
          <img
            src={imageHome}
            width={200}
            height={225}
            className="border-4 rounded-b-md"
            style={{ borderColor: `${colorHome}` }}
          />
        </div>
        <div className="flex flex-col text-center shadow-md hover:scale-110 duration-500 rounded-md">
          <span
            className="rounded-t-md p-1 font-semibold"
            style={{ background: `${colorAway}`, color: `${colorAwayTwo}` }}
          >
            Away
          </span>
          <img
            src={imageAway}
            width={200}
            height={225}
            className="border-4 rounded-b-md"
            style={{ borderColor: `${colorAway}` }}
          />
        </div>
        {imageThird && (
          <div className="flex flex-col text-center shadow-md hover:scale-110 duration-500 rounded-md">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{ background: `${colorThird}`, color: `${colorThirdTwo}` }}
            >
              Third
            </span>
            <img
              src={imageThird}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorThird}` }}
            />
          </div>
        )}
        {imageFourth && (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{
                background: `${colorFourth}`,
                color: `${colorFourthTwo}`,
              }}
            >
              Fourth
            </span>
            <img
              src={imageFourth}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorFourth}` }}
            />
          </div>
        )}

        {imageSpecial1 && (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md">
            <span
              className="rounded-t-md p-1 font-semibold"
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
              className="border-4 rounded-b-md"
              style={{ borderColor: "black" }}
            />
          </div>
        )}
        {imageSpecial2 && (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md">
            <span
              className="rounded-t-md p-1 font-semibold"
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
              className="border-4 rounded-b-md"
              style={{ borderColor: "black" }}
            />
          </div>
        )}
        {imageSpecial3 && (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md">
            <span
              className="rounded-t-md p-1 font-semibold"
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
              className="border-4 rounded-b-md"
              style={{ borderColor: "black" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TeamDetailImages;
