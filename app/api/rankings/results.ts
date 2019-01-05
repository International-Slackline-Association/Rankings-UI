import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/rankings_mock';

export interface APIGetRankingsRequest {
  readonly filters: SelectedFilter[];
  readonly searchInput: string;
}
interface SelectedFilter {
  readonly id: string;
  readonly name: string;
}

export interface APIRankingsResponse {
  readonly items: RankingsItem[];
  readonly next: any;
}

interface RankingsItem {
  readonly id: string;
  readonly rank: number;
  readonly name: string;
  readonly surname: string;
  readonly age: number;
  readonly country: string;
  readonly points: string;
  readonly smallProfileUrl: string;
}

const requestURL = '';
export async function getRankingResults(
  request: APIGetRankingsRequest,
): Promise<APIRankingsResponse> {
  return axios
    .post(requestURL, request, axiosConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIRankingsResponse;
      return result;
    });
}

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
