import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_results_mock';

export interface APIAdminGetResultsRequest {
  readonly id: string;
  readonly discipline: number;
}

export interface APIAdminResultsResponse {
  readonly items: ResultItem[];
}

interface ResultItem {
  readonly id: string;
  readonly place: number;
  readonly name: string;
  readonly surname: string;
  readonly points: number;
}

const requestURL = 'admin/api/results';
export async function adminGetResults(
  request: APIAdminGetResultsRequest,
): Promise<APIAdminResultsResponse> {
  const url = `${requestURL}/${request.id}/${request.discipline}`;
  return axios
    .get(
      url,
      axiosConfig(dummyResponse, 1000, false, await axiosConfigWithAuthToken()),
    )
    .then(resp => {
      const result = resp.data as APIAdminResultsResponse;
      return result;
    });
}

const dummyResponse = (): AxiosResponse<APIAdminResultsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
