import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_contests_mock';
import { Discipline, ContestType } from 'types/application';

export interface APIGetAthleteContestsRequest {
  readonly id: string;
  readonly selectedCategories?: number[];
  readonly next?: any;
}

export interface APIAthleteContestsResponse {
  readonly items: ContestItem[];
  readonly next: any;
}

interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly rank: number;
  readonly contestType: ContestType;
  readonly date: string;
  readonly discipline: Discipline;
  readonly smallProfileUrl: string;
}

const requestURL = 'api/athlete/contests';
export async function getAthleteContests(
  request: APIGetAthleteContestsRequest,
): Promise<APIAthleteContestsResponse> {
  const body = request;
  return axios
    .post(requestURL, body, axiosConfig(dummyResponse, 1000, false))
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
