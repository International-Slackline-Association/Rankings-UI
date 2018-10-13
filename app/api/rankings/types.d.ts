export interface APIGetRankingsRequest {
  filters: SelectedFilter[];
  searchInput: string;
}
interface SelectedFilter {
  id: string;
  name: string;
}

export interface APIRankingsResponse {
  items: RankingsItem[];
  isNextPageAvailable: boolean;
}

interface RankingsItem {
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
