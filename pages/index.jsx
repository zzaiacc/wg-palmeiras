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
      <div className="lg:mt-[20vh] xs:mt-[100px] lg:mb-10 max-w-[1320px] mx-auto">
        <div className="flex  items-center">
          <div className="flex-grow border-t border-green" />
          <div className="flex flex-col lg:mx-10">
            <h1 className="flex-shrink lg:px-10 text-green text-[80px] font-medium uppercase tracking-widest">
              Mantos da Glória
            </h1>
          </div>
          <div className="flex-grow border-t border-green " />
        </div>

        <div className="lg:mt-[5vh] xs:mt-[40px] items-center mb-10 flex justify-center">
          <div className="lg:gap-[100px] xs:gap-[110px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {featuredShirts.map((featuredShirts) => (
              <Camisas featuredShirts={featuredShirts} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <Link href={"/"}>
            <div className="bg-green  px-10 py-3 text-white tracking-[5px] hover:bg-white duration-300 hover:text-green border-transparent border-2 hover:border-green hover:scale-[90%]">
              <h1> Ver mais </h1>
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
