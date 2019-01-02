import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_results_mock';

export interface APIGetContestResultsRequest {
  readonly id: string;
  readonly discipline: number;
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
  readonly points: string;
  readonly smallProfileUrl: string;
}

const requestURL = '';
export async function getContestResults(
  request: APIGetContestResultsRequest,
): Promise<APIContestResultsResponse> {
  const url = `${requestURL}/${request.id}/${request.discipline}`;
  return axios.get(url, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
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
