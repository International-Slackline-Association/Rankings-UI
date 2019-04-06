import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';
import { UISelectOption } from 'types/application';
import { CategoryItem } from 'api/types';

export interface APIRankingCategoriesResponse {
  readonly items: CategoryItem[];
}

export interface APIRankingCategoriesRequest {
  selectedCategories?: number[];
}

const requestURL = 'api/rankings/categories';
export async function getRankingCategories(request: APIRankingCategoriesRequest): Promise<
  APIRankingCategoriesResponse
> {
  const body = request;
  return axios
    .post(requestURL, body, axiosConfig(dummyResponse, 1000, false))
    .then(resp => {
      const result = resp.data as APIRankingCategoriesResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<APIRankingCategoriesResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
