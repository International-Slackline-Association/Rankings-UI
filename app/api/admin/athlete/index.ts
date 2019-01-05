import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_mock';

export interface APIAdminGetAthleteResponse {
  athlete: AthleteItem;
}

export interface AthleteItem {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly profileUrl: string;
  readonly country: string;
  readonly gender: number;
  readonly birthdate: string;
  readonly email: string;
  readonly city: string;
  readonly infoUrl: string;
}

const requestURL = '';
export const adminGetAthlete = async (
  id: string,
): Promise<APIAdminGetAthleteResponse> => {
  const url = `${requestURL}/${id}`;
  return axios.get(url, axiosConfig(dummyResponse, 1000)).then(resp => {
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
