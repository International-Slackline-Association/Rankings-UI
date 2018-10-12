export interface APIGetContestsRequest {
  filters: SelectedFilter[];
  searchInput: string;
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
