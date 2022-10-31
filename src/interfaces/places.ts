
export interface PlacesResponse {
  attribution: string;
  features: Feature[];
  query: string[];
  type: string;
}

export interface Feature {
  bbox?: number[];
  center: number[];
  context: Context[];
  geometry: Geometry;
  id: string;
  language_es?: Language;
  language?: Language;
  place_name_es: string;
  place_name: string;
  place_type: string[];
  properties: Properties;
  relevance: number;
  text_es: string;
  text: string;
  type: string;
}

export interface Context {
  id: string;
  language_es?: Language;
  language?: Language;
  short_code?: string;
  text_es: string;
  text: string;
  wikidata?: string;
}

export enum Language {
  Es = "es",
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  "override:postcode"?: string;
  accuracy?: string;
  wikidata?: string;
}
