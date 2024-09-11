export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: any[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: Date;
  ended: Date;
  officialSite: null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: null;
  updated: number;
  _links: Links;
}
