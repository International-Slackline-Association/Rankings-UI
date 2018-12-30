import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_mock';

export interface APIAdminGetAthleteResponse {
  athlete: AthleteItem;
}

export interface AthleteItem {
  id: string;
  name: string;
  surname: string;
  profileUrl: string;
  country: string;
  gender: number;
  birthdate: string;
  email: string;
  city: string;
}

const requestURL = '';
export const adminGetAthlete = async (
  id: string,
): Promise<APIAdminGetAthleteResponse> => {
  const url = `${requestURL}/${id}`;
  return axios.get(url, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
    const result = resp.data as APIAdminGetAthleteResponse;
    return result;
  });
};

const dummyResponse = (): AxiosResponse<APIAdminGetAthleteResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
