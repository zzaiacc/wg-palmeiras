import jerseys from "./camisas";

export async function getAllJerseys() {
  return jerseys;
}

export async function getIdCamisas(camisaId) {
  return jerseys.find((jersey) => jersey.cid === camisaId);
}

export async function getCards() {
  return jerseys.filter((card) => card.card === true);
}
