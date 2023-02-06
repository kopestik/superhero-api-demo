import {
  Appearance,
  Biography,
  Connections,
  Image,
  Powerstats,
  Work,
} from "./Superhero";

export interface Search {
  error?: string;
  response: string;
  "results-for": string;
  results: Result[];
}

export interface Result {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}
