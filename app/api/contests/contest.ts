import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_mock';
import { ContestCategory, Discipline } from 'types/application';

export interface APIGetContestRequest {
  id: string;
  discipline: number;
}

export interface APIGetContestResponse {
  readonly contest: ContestItem;
}

interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly prize: string;
  readonly contestCategory: ContestCategory;
  readonly date: string;
  readonly city: string;
  readonly country: string;
  readonly discipline: Discipline;
  readonly profileUrl: string;
  readonly infoUrl: string;
}

const requestURL = 'api/contest/details';
export async function getContest(
  request: APIGetContestRequest,
): Promise<APIGetContestResponse> {
  const url = `${requestURL}/${request.id}/${request.discipline}`;
  return axios.get(url, axiosConfig(dummyResponse, 1000, false)).then(resp => {
    const result = resp.data as APIGetContestResponse;
    return result;
  });
}

const dummyResponse = (): AxiosResponse<APIGetContestResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
