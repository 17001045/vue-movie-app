import { OMDB_KEY } from "../config/OMDb";

export class OMDbService {
  async getData(title) {
    return await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${title}`
    );
  }
  async getSingleData(title) {
    return await fetch(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${title}`);
  }
}
