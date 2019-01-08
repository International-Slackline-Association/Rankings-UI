import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/disciplines_mock';
import { ISelectOption } from 'types/application';

export interface APIAdminGetDisciplinesResponse {
  disciplines: ISelectOption[];
}

const requestURL = 'admin/api/contest/disciplines';
export const adminGetDisciplines = async (): Promise<
  APIAdminGetDisciplinesResponse
> => {
  return axios
    .get(requestURL, axiosConfig(
      dummyResponse,
      1000,
      false,
      await axiosConfigWithAuthToken(),
    ))
    .then(resp => {
      const result = resp.data as APIAdminGetDisciplinesResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIAdminGetDisciplinesResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
