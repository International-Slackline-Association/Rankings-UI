import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_results_mock';

export interface APIGetContestResultsRequest {
  readonly id: string;
  readonly discipline: number;
  readonly next: any;
}

export interface APIContestResultsResponse {
  readonly items: AthleteItem[];
  readonly next: any;
}

interface AthleteItem {
  readonly id: string;
  readonly rank: number;
  readonly name: string;
  readonly surname: string;
  readonly age: number;
  readonly country: string;
  readonly points: number;
  readonly thumbnailUrl: string;
}

const requestURL = 'api/contest/results';
export async function getContestResults(
  request: APIGetContestResultsRequest,
): Promise<APIContestResultsResponse> {
  const url = `${requestURL}/${request.id}/${request.discipline}`;
  const body = request.next ? { next: request.next } : undefined;
  return axios
    .post(url, body, axiosConfig(dummyResponse, 1000, false))
    .then(resp => {
      const result = resp.data as APIContestResultsResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<APIContestResultsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
