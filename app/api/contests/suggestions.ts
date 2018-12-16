import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_suggestions_mock';

export interface APIGetContestSuggestionsResponse {
  items: ContestSuggestionItem[];
}

interface ContestSuggestionItem {
  id: string;
  name: string;
}

const requestURL = '';
export async function getContestSuggestions(
  value: string,
): Promise<APIGetContestSuggestionsResponse> {
  const url = requestURL + '/' + value;
  return axios
    .get(url, dummyResponseConfig(dummyContestsResponse, 1000))
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
