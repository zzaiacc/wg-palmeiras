import Divider from "../components/Divider";
import TeamDetailImages from "../components/TeamDetailImages";
import { getAllTeams, getTeamById } from "../data/teamFunctions";

function teamDetailPage({ selectedTeam }) {
  const colorOne = selectedTeam.colorOne;
  const colorTwo = selectedTeam.colorTwo;
  return (
    <>
      <div className="flex justify-center">
        <h3
          className="text-[40px] font-medium w-full text-center"
          style={{ backgroundColor: `${colorOne}`, color: `${colorTwo}` }}
        >
          {selectedTeam.teamName.toUpperCase()}
        </h3>
      </div>

      {selectedTeam.years.map((time, index) => (
        <>
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-5 mt-5"
          >
            <p
              className="bg-blue-400 w-[150px] text-center p-2 rounded-xl font-semibold"
              style={{ backgroundColor: `${colorOne}`, color: `${colorTwo}` }}
            >
              {time.year}
            </p>
            <div className="flex flex-col">
              <TeamDetailImages
                imageHome={time.home}
                imageAway={time.away}
                imageThird={time.third || null}
                imageFourth={time.fourth || null}
                imageSpecial1={time.special1 || null}
                imageSpecial2={time.special2 || null}
                imageSpecial3={time.special3 || null}
                colorHome={time.colorHome}
                colorHomeTwo={time.colorHomeTwo}
                colorAway={time.colorAway}
                colorAwayTwo={time.colorAwayTwo}
                colorThird={time.colorThird || null}
                colorThirdTwo={time.colorThirdTwo || null}
                colorFourth={time.colorFourth || null}
                colorFourthTwo={time.colorFourthTwo || null}
                colorSpecial={time.colorSpecial || null}
                colorSpecialTwo={time.colorSpecialTwo || null}
              />
            </div>
            {console.log(time)}
            <Divider />
          </div>
        </>
      ))}
    </>
  );
}

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

export default teamDetailPage;
