import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/rankings_mock';

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
  next: any;
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

const requestURL = '';
const getRankingResults = (
  request: APIGetRankingsRequest,
): Promise<APIRankingsResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIRankingsResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIRankingsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export default getRankingResults;
