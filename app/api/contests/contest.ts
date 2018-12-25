import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_mock';

export interface APIGetContestRequest {
  id: string;
  discipline: string;
}

export interface APIGetContestResponse {
  readonly contest: ContestItem;
}

interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly prize: string;
  readonly size: string;
  readonly date: number;
  readonly city: string;
  readonly country: string;
  readonly discipline: string;
  readonly profileUrl: string;
}

const requestURL = '';
export async function getContest(
  request: APIGetContestRequest,
): Promise<APIGetContestResponse> {
  const url = `${requestURL}/${request.id}/${request.discipline}`;
  return axios.get(url, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
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
