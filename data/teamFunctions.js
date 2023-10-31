import { teamsData } from "./teamsInfo";

export async function getTeamById(teamId) {
  return teamsData.find((team) => team.id === teamId);
}

export async function getAllTeams() {
  return teamsData;
}

export async function getAllCountries() {
  const uniqueCountries = teamsData.reduce((countries, team) => {
    if (!countries.includes(team.country)) {
      countries.push(team.country);
    }
    return countries;
  }, []);

  return uniqueCountries;
}

//* ALL COUNTRY TEAMS
export async function getItalyTeams() {
  return teamsData.filter((team) => team.country === "Italy");
}
export async function getSpainTeams() {
  return teamsData.filter((team) => team.country === "Spain");
}
export async function getBrazilTeams() {
  return teamsData.filter((team) => team.country === "Brazil");
}
export async function getEnglandTeams() {
  return teamsData.filter((team) => team.country === "England");
}

//* FEATURED
export async function getFeaturedItalyTeams() {
  return teamsData.filter(
    (team) => team.country === "Italy" && team.isFeatured
  );
}
export async function getFeaturedBrazilTeams() {
  return teamsData.filter(
    (team) => team.country === "Brazil" && team.isFeatured
  );
}
export async function getFeaturedSpainTeams() {
  return teamsData.filter(
    (team) => team.country === "Spain" && team.isFeatured
  );
}
export async function getFeaturedEnglandTeams() {
  return teamsData.filter(
    (team) => team.country === "England" && team.isFeatured
  );
}
