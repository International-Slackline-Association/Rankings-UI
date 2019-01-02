import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_contests_mock';
import { Discipline, ContestCategory } from 'types/application';

export interface APIGetAthleteContestsRequest {
  readonly id: string;
  readonly year: string;
}

export interface APIAthleteContestsResponse {
  readonly items: ContestItem[];
  readonly next: any;
}

interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly rank: number;
  readonly contestCategory: ContestCategory;
  readonly date: number;
  readonly discipline: Discipline;
  readonly smallProfileUrl: string;
}

const requestURL = '';
export async function getAthleteContests(
  request: APIGetAthleteContestsRequest,
): Promise<APIAthleteContestsResponse> {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
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
