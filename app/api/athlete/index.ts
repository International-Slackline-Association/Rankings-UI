import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_mock';

export interface APIGetAthleteRequest {
  id: string;
}

export interface APIGetAthleteResponse {
  items: AthleteTableItem[];
  athlete: AthleteItem;
  isNextPageAvailable: boolean;
}

interface AthleteItem {
  id: string;
  name: string;
  surname: string;
  age: number;
  country: string;
  profileUrl: string;
  overallRank: number;
  topDisciplines: string[];
}

interface AthleteTableItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: number;
  rank: number;
  city: string;
  country: string;
  discipline: string;
  disciplines: string[];
  profileUrl: string;
}

const requestURL = '';
const getAthlete = (
  request: APIGetAthleteRequest,
): Promise<APIGetAthleteResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIGetAthleteResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIGetAthleteResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export default getAthlete;
