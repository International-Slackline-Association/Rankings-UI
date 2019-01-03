import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_mock';

export interface APIGetAthleteRequest {
  readonly id: string;
}

export interface APIGetAthleteResponse {
  readonly athlete: AthleteItem;
}

interface AthleteItem {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly age: number;
  readonly country: string;
  readonly profileUrl: string;
  readonly overallRank: number;
  readonly infoUrl: string;
}

const requestURL = '';
export const getAthlete = async (
  request: APIGetAthleteRequest,
): Promise<APIGetAthleteResponse> => {
  const url = `${requestURL}/${request.id}`;
  return axios.get(url, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
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
