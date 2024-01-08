import TeamDetailImages from "../../components/TeamDetailImages";

import { getAllTeams, getTeamById } from "../../data/teamFunctions";

function teamDetailPage({ selectedTeam }) {
  return (
    <>
      <div
        className="flex font-medium font-contrail w-full p-3 text-[3.5rem]"
        style={{
          background: `${selectedTeam.backgroundColor}`,
        }}
      >
        <div className="relative inline-block w-full">
          <img className="h-[5rem] justify-start " src={selectedTeam.logo} />
          <span
            className="absolute font-bebas italic tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[3.5rem] text-center z-2 "
            style={{ color: `${selectedTeam.nameColor}` }}
          >
            {selectedTeam.teamName.toUpperCase()}{" "}
          </span>
        </div>
      </div>

      {selectedTeam.years.map((time, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <p className=" w-[150px] text-center  font-semibold mt-9 mb-5 p-2 border bg-black text-white">
            {time.year}
          </p>
          {console.log(time.home)}
          <div className="flex flex-col">
            <TeamDetailImages
              imageHome={time.home}
              imageAway={time.away}
              imageThird={time.third}
              imageFourth={time.fourth}
              imageSpecial1={time.special1}
              imageSpecial2={time.special2}
              imageSpecial3={time.special3}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default teamDetailPage;

export async function getStaticProps(context) {
  const teamId = context.params.tid;

  const team = await getTeamById(teamId);

  return {
    props: {
      selectedTeam: team,
    },
  };
}

export async function getStaticPaths() {
  const teams = await getAllTeams();

  const paths = teams.map((team) => ({
    params: { tid: team.id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
