import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_athlete_mock';

export interface APIAdminSubmitAthletePictureResponse {}

export interface APIAdminSubmitAthletePictureRequest {
  url: string;
  id: string;
}

const requestURL = 'admin/api/submit/athlete/picture';
export const adminSubmitAthletePicture = async (
  request: APIAdminSubmitAthletePictureRequest,
): Promise<APIAdminSubmitAthletePictureResponse> => {
  const body = request;
  return axios
    .post(
      requestURL,
      body,
      axiosConfig(
        dummyResponse,
        1000,
        false,
        await axiosConfigWithAuthToken(),
      ),
    )
    .then(resp => {
      const result = resp.data as APIAdminSubmitAthletePictureResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<
  APIAdminSubmitAthletePictureResponse
> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
