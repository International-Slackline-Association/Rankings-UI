import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/athlete_mock';
import { APIGetAthleteRequest, APIGetAthleteResponse  } from './types';

const requestURL = '';
const getAthlete = (request: APIGetAthleteRequest): Promise<APIGetAthleteResponse> => {
  return axios.post(requestURL, request, dummyResponseConfig(dummyContestsResponse, 1000)).then(resp => {
    const result = resp.data as APIGetAthleteResponse;
    return result;
  });
};

const dummyContestsResponse = (): AxiosResponse<APIGetAthleteResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export { APIGetAthleteRequest, APIGetAthleteResponse };
export default getAthlete;
