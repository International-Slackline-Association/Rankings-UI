import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/rankings_mock';
import { APIGetRankingsRequest, APIRankingsResponse } from './types';

const requestURL = '';
const getRankingResults = (
  request: APIGetRankingsRequest,
): Promise<APIRankingsResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIRankingsResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIRankingsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export { APIGetRankingsRequest, APIRankingsResponse };
export default getRankingResults;
