import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_mock';
import { APIGetContestRequest } from './contests';

export interface APIGetContestResponse {
  items: ContestTableItem[];
  contest: ContestItem;
  isNextPageAvailable: boolean;
}

interface ContestItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: number;
  city: string;
  country: string;
  disciplines: string[];
  profileUrl: string;
}

interface ContestTableItem {
  id: string;
  rank: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  points: string;
  profileUrl: string;
  overallRank: number;
  topDisciplines: string[];
}

const requestURL = '';
const getContest = (
  request: APIGetContestRequest,
): Promise<APIGetContestResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIGetContestResponse;
      return result;
    });
};

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

export { APIGetContestRequest };
export default getContest;
