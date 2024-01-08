import Link from "next/link";
import React from "react";

function LeagueList({ img, league, path }) {
  return (
    <div className="relative inline-block group">
      <Link href={path}>
        <img
          src={img}
          alt={league}
          className="w-[100vw] filter grayscale group-hover:filter-none duration-700"
        />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10rem] text-center font-sans z-2 font-bold group-hover: filter-none">
          {league.toUpperCase()}
        </div>
      </Link>
    </div>
  );
}

export default LeagueList;
