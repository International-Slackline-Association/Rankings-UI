import axios, { axiosConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_suggestions_mock';

export interface APIGetAthleteSuggestionsResponse {
  items: AthleteSuggestionItem[];
}

interface AthleteSuggestionItem {
  id: string;
  name: string;
  surname: string;
  email: string;
}

const requestURL = 'api/athlete/suggestions';
const getAthleteSuggestions = async (
  value: string,
): Promise<APIGetAthleteSuggestionsResponse> => {
  const url = `${requestURL}/${value}`;
  return axios.get(url, axiosConfig(dummyResponse, 1000, false)).then(resp => {
    const result = resp.data as APIGetAthleteSuggestionsResponse;
    return result;
  });
};

const dummyResponse = (): AxiosResponse<APIGetAthleteSuggestionsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export default getAthleteSuggestions;
