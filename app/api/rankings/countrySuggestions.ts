import axios, { axiosConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/countrySuggestions_mock';

export interface APIGetCountrySuggestionsResponse {
  readonly items: CountrySuggestionItem[];
}

interface CountrySuggestionItem {
  readonly code: string;
  readonly name: string;
}

const requestURL = 'api/country/suggestions';
export async function getCountrySuggestions(
  value: string,
): Promise<APIGetCountrySuggestionsResponse> {
  const url = `${requestURL}/${value}`;
  return axios
    .get(
      url,
      axiosConfig(dummyResponse, 1000, false),
    )
    .then(resp => {
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
