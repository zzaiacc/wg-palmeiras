import React from "react";
import { getAllCountries, getTeamsByCountry } from "../data/teamFunctions";
import TeamsList from "../components/TeamsList";
import Footer from "../components/Footer";

function TeamsByCountry({ teamByCountry }) {
  return (
    <>
      <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 gap-5  justify-center items-center p-10 mx-[50px]">
        {teamByCountry.map((team) => (
          <div key={team.id}>
            <TeamsList
              logo={team.logo}
              name={team.teamName}
              colorOne={team.colorOne}
              colorTwo={team.colorTwo}
              id={team.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamsByCountry;

export async function getStaticPaths() {
  const countries = await getAllCountries();

  const paths = countries.map((country) => ({
    params: { country },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const country = params.country;
  const teams = await getTeamsByCountry(country);

  return {
    props: {
      teamByCountry: teams,
    },
  };
}
