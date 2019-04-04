import axios, { axiosConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_suggestions_mock';
import { Discipline } from 'types/application';

export interface APIGetContestSuggestionsRequest {
  readonly query: string;
  readonly selectedCategories?: number[];
  readonly returnCount?: number;
}

export interface APIGetContestSuggestionsResponse {
  items: ContestSuggestionItem[];
}

interface ContestSuggestionItem {
  id: string;
  name: string;
  discipline: Discipline;
  year: number;
}

const requestURL = 'api/contest/suggestions';
export async function getContestSuggestions(
  request: APIGetContestSuggestionsRequest,
): Promise<APIGetContestSuggestionsResponse> {
  const body = request;
  return axios
    .post(requestURL, body, axiosConfig(dummyContestsResponse, 1000, false))
    .then(resp => {
      const result = resp.data as APIGetContestSuggestionsResponse;
      return result;
    });
}

const dummyContestsResponse = (): AxiosResponse<
  APIGetContestSuggestionsResponse
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
