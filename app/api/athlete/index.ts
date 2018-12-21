import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_mock';

export interface APIGetAthleteRequest {
  id: string;
}

export interface APIGetAthleteResponse {
  athlete: AthleteItem;
}

interface AthleteItem {
  id: string;
  name: string;
  surname: string;
  age: number;
  country: string;
  profileUrl: string;
  overallRank: number;
}

const requestURL = '';
export const getAthlete = async (
  request: APIGetAthleteRequest,
): Promise<APIGetAthleteResponse> => {
  const url = `${requestURL}/${request.id}`;
  return axios
    .get(url, dummyResponseConfig(dummyResponse, 1000))
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
