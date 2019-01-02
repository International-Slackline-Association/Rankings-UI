import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_athlete_mock';

export interface APIAdminSubmitAthletePictureResponse {
  success: boolean;
  errorMessage: string;
}

export interface APIAdminSubmitAthletePictureRequest {
  url: string;
}

const requestURL = '';
export const adminSubmitAthletePicture = async (
  request: APIAdminSubmitAthletePictureRequest,
): Promise<APIAdminSubmitAthletePictureResponse> => {
  return axios.post(requestURL, request, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
    const result = resp.data as APIAdminSubmitAthletePictureResponse;
    return result;
  });
};


const dummyResponse = (): AxiosResponse<APIAdminSubmitAthletePictureResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
