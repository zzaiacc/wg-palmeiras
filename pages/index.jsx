import {
  getFeaturedBrazilTeams,
  getFeaturedEnglandTeams,
  getFeaturedItalyTeams,
  getFeaturedSpainTeams,
} from "../data/teamFunctions";
import TeamsList from "../components/TeamsList";
import Link from "next/link";

export default function Home({
  italyTeams,
  brazilTeams,
  nationalTeams,
  spainTeams,
  englandTeams,
}) {
  return (
    <div className="mx-6 flex flex-col justify-center items-center">
      <div className="flex justify-center text-center items-center gap-5 mt-10 ">
        {englandTeams.map((team) => (
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
      <div className="flex flex-col justify-center mt-10 ">
        <div className="flex justify-end w-full items-center mb-2">
          {/* <Link href="/spain">
            <p className=" bg-black p-2 text-white rounded-lg ">
              See more from
              <span className="text-red-500 font-semibold"> Spain </span>
            </p>
          </Link> */}
        </div>
        <div className="flex w-full text-center items-center gap-5 ">
          {spainTeams.map((team) => (
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
      </div>
      <div>
        <div className="flex justify-center text-center items-center gap-5 mt-10">
          {italyTeams.map((team) => (
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
      </div>
      <div className="flex justify-center text-center items-center gap-5 mt-10">
        {brazilTeams.map((team) => (
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
    </div>
  );
}

export async function getStaticProps() {
  const italyTeams = await getFeaturedItalyTeams();
  const brazilTeams = await getFeaturedBrazilTeams();
  const spainTeams = await getFeaturedSpainTeams();
  const englandTeams = await getFeaturedEnglandTeams();
  // const englandTeams = await getEnglandTeams();
  return {
    props: {
      italyTeams: italyTeams,
      brazilTeams: brazilTeams,
      spainTeams: spainTeams,
      englandTeams: englandTeams,
    },
  };
}
