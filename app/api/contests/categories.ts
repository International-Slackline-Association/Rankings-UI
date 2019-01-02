import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';
import { UISelectOption } from 'types/application';

export interface APIContestsCategoriesResponse {
  items: CategoryItem[];
}

interface CategoryItem {
  title: string;
  options: UISelectOption[];
  selectedValue: string;
}

const requestURL = '';
export async function getContestsCategories(): Promise<
  APIContestsCategoriesResponse
> {
  return axios
    .get(requestURL, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIContestsCategoriesResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<APIContestsCategoriesResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
