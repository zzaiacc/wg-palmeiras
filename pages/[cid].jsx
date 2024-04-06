import React from "react";
import { getAllJerseys, getIdCamisas } from "../data/dataFunctions";
import NavBar from "../components/NavBar";
import CamisaDetails from "../components/CamisaDetails";

function JerseyDetail({ teamByCid }) {
  return (
    <>
      <div className="h-screen bg-green-900 relative">
        <NavBar />
        <CamisaDetails teamByCid={teamByCid} />
      </div>
    </>
  );
}

export default JerseyDetail;

export async function getStaticPaths() {
  const jersey = await getAllJerseys();

  const paths = jersey.map((jersey) => ({
    params: { cid: String(jersey.cid) },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const cid = params.cid;
  const jerseys = await getIdCamisas(cid);

  return {
    props: {
      teamByCid: jerseys,
    },
  };
}
