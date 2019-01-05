import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_athlete_mock';
import { AthleteItem } from '.';

export interface APIAdminSubmitAthleteResponse {
  id: string;
}

export interface APIAdminSubmitAthleteRequest {
  athlete: AthleteItem;
}

const requestURL = 'admin/api/submit/athlete';
export const adminSubmitAthlete = async (
  request: APIAdminSubmitAthleteRequest,
): Promise<APIAdminSubmitAthleteResponse> => {
  const body = request.athlete;
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
