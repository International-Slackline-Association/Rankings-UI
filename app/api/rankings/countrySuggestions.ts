import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/countrySuggestions_mock';

export interface APIGetCountrySuggestionsResponse {
  items: CountrySuggestionItem[];
}

interface CountrySuggestionItem {
  code: string;
  name: string;
}

const requestURL = '';
export async function getCountrySuggestions(
  value: string,
): Promise<APIGetCountrySuggestionsResponse> {
  const url = requestURL + '/' + value;
  return axios.get(url, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
    const result = resp.data as APIGetCountrySuggestionsResponse;
    return result;
  });
}

const dummyResponse = (): AxiosResponse<APIGetCountrySuggestionsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
