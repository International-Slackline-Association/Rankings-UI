import axios, { axiosConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contests_mock';
import { Discipline, ContestCategory } from 'types/application';

export interface APIGetContestsRequest {
  readonly selectedCategories?: number[];
  readonly contestId?: string;
  readonly next?: any;
}

export interface APIGetContestsResponse {
  readonly items: ContestsItem[];
  readonly next: any;
}

interface ContestsItem {
  readonly id: string;
  readonly name: string;
  readonly prize: string;
  readonly contestCategory: ContestCategory;
  readonly date: string;
  readonly discipline: Discipline;
  readonly smallProfileUrl: string;
}

const requestURL = 'api/contest/list';
export async function getContests(
  request: APIGetContestsRequest,
): Promise<APIGetContestsResponse> {
  const body = request;
  return axios
    .post(requestURL, body, axiosConfig(dummyResponse, 1000, false))
    .then(resp => {
      const result = resp.data as APIGetContestsResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<APIGetContestsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
