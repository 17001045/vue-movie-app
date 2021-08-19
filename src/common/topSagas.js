export const topSagas = [
  "Batman",
  "Harry Potter",
  "Jurassic Park",
  "Indiana Jones",
  "Alien",
  "Matrix",
  "Terminator",
  "Predator",
  "007",
  "padrino",
  "Rocky",
  "Star Wars",
  "Star Trek",
  "Mad Max",
];

export const getRandomSaga = () => {
  return topSagas[Math.floor(Math.random() * topSagas.length) + 0];
};
