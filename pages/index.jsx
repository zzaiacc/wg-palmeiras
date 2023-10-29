import {
  getAllTeams,
  getBrazilTeams,
  getEnglandTeams,
  getEuropeTeams,
  getItalyTeams,
  getSpainTeams,
} from "../data/teamFunctions";
import TeamsList from "../components/TeamsList";

export default function Home({
  italyTeams,
  brazilTeams,
  nationalTeams,
  spainTeams,
  englandTeams,
}) {
  return (
    <div className=" border-cyan-400">
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
      <div className="flex justify-center text-center items-center gap-5 mt-10">
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
    </div>
  );
}

export async function getStaticProps() {
  const italyTeams = await getItalyTeams();
  const brazilTeams = await getBrazilTeams();
  const spainTeams = await getSpainTeams();
  const englandTeams = await getEnglandTeams();
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
