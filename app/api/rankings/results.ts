import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/rankings_mock';

export interface APIGetRankingsRequest {
  readonly selectedCategories?: number[];
  readonly athleteId?: string;
  readonly country?: string;
  readonly next?: string;
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
  readonly thumbnailUrl: string;
  readonly contestCount?: number;
  readonly changeInRank: number;
}

const requestURL = 'api/rankings/list';
export async function getRankingResults(
  request: APIGetRankingsRequest,
): Promise<APIRankingsResponse> {
  const body = request;
  return axios
    .post(requestURL, body, axiosConfig(undefined, 1000, false))
    .then(resp => {
      const result = resp.data as APIRankingsResponse;
      return result;
    });
}
