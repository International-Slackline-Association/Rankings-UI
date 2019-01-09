import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/categories_mock';
import { CategoryItem } from 'api/types';

export interface APIAthleteContestsCategoriesResponse {
  items: CategoryItem[];
}

const requestURL = 'api/athlete/categories';
export async function getAthleteContestsCategories(): Promise<
  APIAthleteContestsCategoriesResponse
> {
  return axios
    .get(requestURL, axiosConfig(dummyResponse, 1000, false))
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
