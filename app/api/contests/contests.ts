import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contests_mock';

export interface APIGetContestsRequest {
  filters: SelectedFilter[];
  searchInput: string;
}

interface SelectedFilter {
  id: string;
  name: string;
}

export interface APIGetContestsResponse {
  items: ContestsItem[];
  next: any;
}

interface ContestsItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: number;
  discipline: string;
  smallProfileUrl: string;
}

const requestURL = '';
export async function getContests(
  request: APIGetContestsRequest,
): Promise<APIGetContestsResponse> {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
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
