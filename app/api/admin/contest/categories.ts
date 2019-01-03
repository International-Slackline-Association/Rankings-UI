import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';
import { ISelectOption } from 'types/application';

export interface APIAdminGetCategoriesResponse {
  categories: ISelectOption[];
}

const requestURL = '';
export const adminGetCategories = async (): Promise<
  APIAdminGetCategoriesResponse
> => {
  return axios
    .get(requestURL, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIAdminGetCategoriesResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIAdminGetCategoriesResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
