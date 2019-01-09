import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';
import { CategoryItem } from 'api/types';

export interface APIContestsDisciplineCategoriesResponse {
  items: CategoryItem[];
}
const requestURL = 'api/contest/categories';
export async function getContestsDisciplineCategories(): Promise<
  APIContestsDisciplineCategoriesResponse
> {
  return axios
    .get(requestURL, axiosConfig(dummyResponse, 1000, false))
    .then(resp => {
      const result = resp.data as APIContestsDisciplineCategoriesResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<
  APIContestsDisciplineCategoriesResponse
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
