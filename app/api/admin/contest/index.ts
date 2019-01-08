import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_mock';
import { Discipline, ContestCategory } from 'types/application';

export interface APIAdminGetContestResponse {
  contest: ContestItem;
}

export interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly city: string;
  readonly country: string;
  readonly discipline: Discipline;
  readonly contestCategory: ContestCategory;
  readonly prize: number;
  readonly profileUrl: string;
  readonly infoUrl: string;
}

const requestURL = 'admin/api/contest';
export const adminGetContest = async (
  id: string,
  discipline: number,
): Promise<APIAdminGetContestResponse> => {
  const url = `${requestURL}/${id}/${discipline}`;
  return axios
    .get(
      url,
      axiosConfig(dummyResponse, 1000, false, await axiosConfigWithAuthToken()),
    )
    .then(resp => {
      const result = resp.data as APIAdminGetContestResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIAdminGetContestResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
