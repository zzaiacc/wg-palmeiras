import React from "react";
import Hero from "../components/Hero";
import Camisas from "../components/Camisas";

// import Image from "next/image";
// import Link from "next/link";
import { getCards } from "../data/dataFunctions";
import Link from "next/link";

export default function Home({ featuredShirts }) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="lg:mt-[159px] xs:mt-[30px] lg:w-[80vw] mx-auto lg:mb-10">
        <div className="flex py-5 items-center ">
          <div className="flex-grow border-t border-green-600 " />
          <h2 className=" flex-shrink mx-auto px-10 text-green-600 text-[50px] font-medium">
            CAMISAS
          </h2>
          <div className="flex-grow border-t border-green-600 " />
        </div>

        <div className="mt-[159px] xs:mt-[80px] mx-auto mb-10 w-[80vw] flex justify-center">
          <div className="gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {featuredShirts.map((featuredShirts) => (
              <Camisas featuredShirts={featuredShirts} />
            ))}
          </div>
        </div>
        <div className="flex justify-center w-[80vw] mx-auto">
          <Link href={"/"}>
            <div className="bg-green-600  px-10 py-3 text-white font-bold tracking-widest hover:bg-white duration-300">
              <h2> Ver mais </h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const featuredShirts = await getCards();
  return {
    props: {
      featuredShirts: featuredShirts,
    },
  };
}
