import axios, { axiosConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_suggestions_mock';
import { Discipline } from 'types/application';

export interface APIGetContestSuggestionsResponse {
  items: ContestSuggestionItem[];
}

interface ContestSuggestionItem {
  id: string;
  name: string;
  discipline: Discipline;
}

const requestURL = '';
export async function getContestSuggestions(
  value: string,
): Promise<APIGetContestSuggestionsResponse> {
  const url = requestURL + '/' + value;
  return axios
    .get(url, axiosConfig(dummyContestsResponse, 1000))
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
