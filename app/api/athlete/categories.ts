import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';
import { UISelectOption } from 'types/application';

export interface APIAthleteContestsCategoriesResponse {
  items: CategoryItem[];
}

interface CategoryItem {
  title: string;
  options: UISelectOption[];
  selectedValue: string;
}

const requestURL = '';
export async function getAthleteContestsCategories(): Promise<
  APIAthleteContestsCategoriesResponse
> {
  return axios
    .get(requestURL, axiosConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIAthleteContestsCategoriesResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<
  APIAthleteContestsCategoriesResponse
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
