export interface APIGetContestsRequest {
  filters: SelectedFilter[];
  searchInput: string;
}

export interface APIGetContestRequest {
  id: string;
}

interface SelectedFilter {
  id: string;
  name: string;
}

export interface APIGetContestsResponse {
  items: ContestsItem[];
  isNextPageAvailable: boolean;
}

interface ContestsItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: number;
  city: string;
  country: string;
  disciplines: string[];
  profileUrl: string;
}

export interface APIGetContestResponse {
  items: ContestTableItem[];
  contest: ContestItem;
  isNextPageAvailable: boolean;
}

interface ContestItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: number;
  city: string;
  country: string;
  disciplines: string[];
  profileUrl: string;
}

interface ContestTableItem {
  id: string;
  rank: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  points: string;
  profileUrl: string;
  overallRank: number;
  topDisciplines: string[];
}
