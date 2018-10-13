export interface APIGetAthleteRequest {
  id: string;
}

export interface APIGetAthleteResponse {
  items: AthleteTableItem[];
  athlete: AthleteItem;
  isNextPageAvailable: boolean;
}

interface AthleteItem {
  id: string;
  name: string;
  surname: string;
  age: number;
  country: string;
  profileUrl: string;
  overallRank: number;
  topDisciplines: string[];
}

interface AthleteTableItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: number;
  rank: number;
  city: string;
  country: string;
  discipline: string;
  disciplines: string[];
  profileUrl: string;
}
