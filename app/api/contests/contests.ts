import axios, { axiosConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contests_mock';
import { Discipline, ContestCategory } from 'types/application';

export interface APIGetContestsRequest {
  readonly filters: SelectedFilter[];
  readonly searchInput: string;
}

interface SelectedFilter {
  readonly id: string;
  readonly name: string;
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
  readonly date: number;
  readonly discipline: Discipline;
  readonly smallProfileUrl: string;
}

const requestURL = '';
export async function getContests(
  request: APIGetContestsRequest,
): Promise<APIGetContestsResponse> {
  return axios
    .post(requestURL, request, axiosConfig(dummyResponse, 1000))
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
