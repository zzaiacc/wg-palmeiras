import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [selectedLeague, setselectedLeague] = useState(null);
  const leagues = [
    {
      label: (
        <span className="hover:text-purple-300 duration-500">Brasileirão</span>
      ),
      value: "br",
    },
    {
      label: (
        <span className="hover:text-purple-300 duration-500"> Serie A </span>
      ),
      value: "sa",
    },
    {
      label: (
        <span className="hover:text-purple-300 duration-500">
          Premier League
        </span>
      ),
      value: "pl",
    },
    {
      label: (
        <span className="hover:text-purple-300 duration-500">La Liga</span>
      ),
      value: "ll",
    },
  ];

  useEffect(() => {
    if (router.pathname === "/") {
      setselectedLeague(null);
    }
  }, [router.pathname]);

  const handleLeague = (league) => {
    setselectedLeague(league.value); // Pega o nome da liga selecionada
    console.log(league.value);
    if (league.value === "br" || router.pathname === "/brazil") {
      router.push("/brazil");
    } else if (league.value === "pl") {
      router.push("/england");
    } else if (league.value === "sa") {
      router.push("/italy");
    } else if (league.value === "ll") {
      router.push("/spain");
    }
  };

  return (
    <nav className="w-full bg-black p-3 flex items-center z-10">
      <div className="hover:scale-105 duration-700 justify-start">
        <Link href="/">
          <Image src="/wg-logo.png" width={300} height={50} alt="wg-logo" />
        </Link>
      </div>

      <div className="flex mx-auto">
        <Dropdown
          value={selectedLeague}
          onChange={handleLeague}
          options={leagues}
          optionLabel="label"
          placeholder="Choose League"
          className="p-dropdown-item p-dropdown-custom p-dropdown-label"
        />
      </div>
    </nav>
  );
}

export default Header;
