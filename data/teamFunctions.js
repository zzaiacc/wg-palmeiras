import { teamsData } from "./teamsInfo";

export async function getTeamById(teamId) {
  return teamsData.find((team) => team.id === teamId);
}

export async function getAllTeams() {
  return teamsData;
}

export async function getItalyTeams() {
  return teamsData.filter((team) => team.country === "Italy");
}
export async function getBrazilTeams() {
  return teamsData.filter((team) => team.country === "Brazil");
}
export async function getSpainTeams() {
  return teamsData.filter((team) => team.country === "Spain");
}
