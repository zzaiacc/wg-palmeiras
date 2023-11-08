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

export async function getTeamsByCountry(country) {
  return teamsData.filter((team) => team.country === country);
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
    (team) => team.country === "italy" && team.isFeatured
  );
}
export async function getFeaturedBrazilTeams() {
  return teamsData.filter(
    (team) => team.country === "brazil" && team.isFeatured
  );
}
export async function getFeaturedSpainTeams() {
  return teamsData.filter(
    (team) => team.country === "spain" && team.isFeatured
  );
}
export async function getFeaturedEnglandTeams() {
  return teamsData.filter(
    (team) => team.country === "england" && team.isFeatured
  );
}
