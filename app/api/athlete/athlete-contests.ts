import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_contests_mock';

export interface APIGetAthleteContestsRequest {
  id: string;
  year: string;
}

export interface APIAthleteContestsResponse {
  items: ContestItem[];
  next: any;
}

interface ContestItem {
  id: string;
  name: string;
  rank: number;
  size: string;
  date: number;
  discipline: string;
  smallProfileUrl: string;
}

const requestURL = '';
export async function getAthleteContests(
  request: APIGetAthleteContestsRequest,
): Promise<APIAthleteContestsResponse> {
  return axios.post(requestURL, request, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
    const result = resp.data as APIAthleteContestsResponse;
    return result;
  });
}

const dummyResponse = (): AxiosResponse<APIAthleteContestsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

