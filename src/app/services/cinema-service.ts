import {Injectable} from "@angular/core";
import {CINEMAS} from "./mock-cinemas";
import { Cinema } from "../models/cinema";

@Injectable()
export class CinemaService {
  private cinemas: Cinema[];

  constructor() {
    this.cinemas = CINEMAS;
  }

  getAll() {
    this.cinemas = CINEMAS;
    return this.cinemas;
  }

  getItem(id) {
    for (var i = 0; i < this.cinemas.length; i++) {
      if (this.cinemas[i].id === parseInt(id)) {
        return this.cinemas[i];
      }
    }
    return null;
  }

  remove(item) {
    this.cinemas.splice(this.cinemas.indexOf(item), 1);
  }
}
