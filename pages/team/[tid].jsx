import TeamDetailImages from "../../components/TeamDetailImages";
import { getAllTeams, getTeamById } from "../../data/teamFunctions";

function teamDetailPage({ selectedTeam }) {
  const colorOne = selectedTeam.colorOne;
  const colorTwo = selectedTeam.colorTwo;
  const textColor = selectedTeam.textColor;

  return (
    <>
      <div className="flex justify-center items-center">
        <h3
          className="text-[40px] font-medium w-full text-center flex justify-center items-center gap-3"
          style={{ color: `${textColor}` }}
        >
          <span>
            <img src={selectedTeam.logo} alt="" className="w-10" />
          </span>
          {selectedTeam.teamName.toUpperCase()}
          <span>
            <img src={selectedTeam.logo} alt="" className="w-10" />
          </span>
        </h3>
      </div>

      {selectedTeam.years.map((time, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <p
            className="bg-blue-400 w-[150px] text-center rounded-xl font-semibold mt-9 mb-5 p-2"
            style={{ backgroundColor: `${colorOne}`, color: `${colorTwo}` }}
          >
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
              colorHome={time.colorHome}
              colorHomeTwo={time.colorHomeTwo}
              colorAway={time.colorAway}
              colorAwayTwo={time.colorAwayTwo}
              colorThird={time.colorThird}
              colorThirdTwo={time.colorThirdTwo}
              colorFourth={time.colorFourth}
              colorFourthTwo={time.colorFourthTwo}
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
