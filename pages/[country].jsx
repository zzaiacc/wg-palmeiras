import React from "react";
import { getAllCountries, getTeamsByCountry } from "../data/teamFunctions";
import TeamsList from "../components/TeamsList";

function TeamsByCountry({ teamByCountry }) {
  const colorOne = teamByCountry.colorOne;
  const colorTwo = teamByCountry.colorTwo;
  console.log(teamByCountry);
  return (
    <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 gap-5 mt-5 justify-center items-center ">
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
