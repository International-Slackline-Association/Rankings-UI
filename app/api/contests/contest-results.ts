import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_results_mock';

export interface APIGetContestResultsRequest {
  id: string;
  discipline: string;
}

export interface APIContestResultsResponse {
  items: AthleteItem[];
  next: any;
}

interface AthleteItem {
  id: string;
  rank: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  points: string;
  smallProfileUrl: string;
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

