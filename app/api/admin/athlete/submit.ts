import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_athlete_mock';
import { AthleteItem } from '.';

export interface APIAdminSubmitAthleteResponse {
  id: string;
  success: boolean;
  errorMessage: string;
}

export interface APIAdminSubmitAthleteRequest {
  athlete: AthleteItem;
}

const requestURL = '';
export const adminSubmitAthlete = async (
  request: APIAdminSubmitAthleteRequest,
): Promise<APIAdminSubmitAthleteResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIAdminSubmitAthleteResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIAdminSubmitAthleteResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
