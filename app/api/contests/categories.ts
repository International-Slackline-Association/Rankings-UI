import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';

export interface APIContestsCategoriesResponse {
  items: CategoryItem[];
}

interface CategoryItem {
  title: string;
  options: ISelectOption[];
  selectedValue: string;
}

interface ISelectOption {
  value: string;
  label: string;
  isContainerStyle?: boolean;
  inlineLevel?: number;
}

const requestURL = '';
const getContestsCategories = (): Promise<APIContestsCategoriesResponse> => {
  return axios
    .get(requestURL, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIContestsCategoriesResponse;
      return result;
    });
};

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

export default getContestsCategories;
