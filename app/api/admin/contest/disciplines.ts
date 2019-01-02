import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/disciplines_mock';
import { ISelectOption } from 'types/application';

export interface APIAdminGetDisciplinesResponse {
  disciplines: ISelectOption[];
}

const requestURL = '';
export const adminGetDisciplines = async (): Promise<
  APIAdminGetDisciplinesResponse
> => {
  return axios
    .get(requestURL, dummyResponseConfig(dummyResponse, 1000))
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
