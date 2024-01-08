import {
  getFeaturedBrazilTeams,
  getFeaturedEnglandTeams,
  getFeaturedItalyTeams,
  getFeaturedSpainTeams,
} from "../data/teamFunctions";

import { database } from "../data/db";

import LeagueList from "../components/LeagueList";
import Header from "../components/Header";
import { firebase } from "../data/db";

export default function Home({
  italyTeams,
  brazilTeams,
  nationalTeams,
  spainTeams,
  englandTeams,
}) {
  const leagues = [
    {
      league: "Brasil",
      img: "/brazil/capa_site.png",
      path: "/brazil",
    },
    {
      league: "England",
      img: "/england/capa_site.png",
      path: "/england",
    },
    {
      league: "España",
      img: "/spain/capa_site.png",
      path: "/spain",
    },
    {
      league: "Italia",
      img: "/italy/capa_site.png",
      path: "/italy",
    },
  ];
  return (
    <>
      <Header />
      <div className="w-full">
        {leagues.map((leagues) => (
          <LeagueList
            path={leagues.path}
            img={leagues.img}
            league={leagues.league}
          />
        ))}
      </div>
      {/* <div className="mx-6 flex flex-col justify-center items-center mb-[5rem]">
        
        <div className="flex flex-col justify-center mt-10 ">
          <div className="flex justify-end w-full items-center mb-2">
            <Link href="/england">
              <p className="group hover:scale-110 duration-500 p-2 rounded-md group-hover:text-red-500 flex items-center ">
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  <AddIcon />
                </span>
                &nbsp; More from&nbsp;
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  England
                </span>
              </p>
            </Link>
          </div>

          <div className="flex justify-center text-center items-center gap-5  ">
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
        </div>
     
        <div className="flex flex-col justify-center mt-10 ">
          <div className="flex justify-end w-full items-center mb-2">
            <Link href="/spain">
              <p className="group hover:scale-110 duration-500 p-2 rounded-md group-hover:text-red-500 flex items-center ">
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  <AddIcon />
                </span>
                &nbsp; Más de&nbsp;
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  España
                </span>
              </p>
            </Link>
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
  
        <div className="flex flex-col justify-center mt-10 ">
          <div className="flex justify-end w-full items-center mb-2">
            <Link href="/italy">
              <p className="group hover:scale-110 duration-500 p-2 rounded-md group-hover:text-red-500 flex items-center ">
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  <AddIcon />
                </span>
                &nbsp; più dall'&nbsp;
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  Italia
                </span>
              </p>
            </Link>
          </div>
          <div className="flex justify-center text-center items-center gap-5">
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

       
        <div className="flex flex-col justify-center mt-10 ">
          <div className="flex justify-end w-full items-center mb-2">
            <Link href="/brazil">
              <p className="group hover:scale-110 duration-500 p-2 rounded-md group-hover:text-red-500 flex items-center ">
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  <AddIcon />
                </span>
                &nbsp; Mais do&nbsp;
                <span className="group-hover:text-red-500 font-semibold duration-500">
                  Brasil
                </span>
              </p>
            </Link>
          </div>

          <div className="flex justify-center text-center items-center gap-5">
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
      <Footer /> */}
    </>
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
