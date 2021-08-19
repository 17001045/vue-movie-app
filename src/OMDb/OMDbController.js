import { OMDbService } from "./OMDbService";
import { Sweetalert2, SW_icons } from "../libs/Sweetalert2";
import { topMoviesAccion } from "../common/topMovies";

export class OMDbController {
  constructor() {
    this._OMDbService = new OMDbService();
    this.altMsgTxt = {
      title: "película no encontrada",
      txt: "titulo mal escrito",
    };
  }
  async getSearch(title) {
    const response = await this._OMDbService.getData(title);

    if (response.ok) {
      const resJson = await response.json();
      if (resJson.Response === "True") {
        return resJson.Search;
      } else {
        this.alertMsg(this.altMsgTxt.title, this.altMsgTxt.txt);
        return topMoviesAccion;
      }
    } else {
      return this.alertMsg("Error", response.statusText);
    }
  }
  async getMovie(title) {
    const response = await this._OMDbService.getSingleData(title);

    if (response.ok) {
      const resJson = await response.json();
      return resJson;
    } else {
      return this.alertMsg("Error", response.statusText);
    }
  }

  async getTopAction() {
    const movies = [];
    topMoviesAccion.forEach(async (m) => {
      const response = await this._OMDbService.getSingleData(m);
      if (response.ok) {
        const resJson = await response.json();

        movies.push(resJson);
      } else {
        return this.alertMsg("Error", response.statusText);
      }
    });
    return movies;
  }
  alertMsg(title, text) {
    return Sweetalert2.alert({
      icon: SW_icons.ERROR,
      title,
      text,
    });
  }
}
