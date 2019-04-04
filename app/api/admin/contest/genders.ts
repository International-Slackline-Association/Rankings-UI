import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

// import mockResponse from './__mocks__/categories_mock';
import { ISelectOption } from 'types/application';

export interface APIAdminGetGendersResponse {
  genders: ISelectOption[];
}

const requestURL = 'admin/api/contest/genders';
export const adminGetGenders = async (): Promise<
APIAdminGetGendersResponse
> => {
  return axios
    .get(
      requestURL,
      axiosConfig(undefined, 1000, false, await axiosConfigWithAuthToken()),
    )
    .then(resp => {
      const result = resp.data as APIAdminGetGendersResponse;
      return result;
    });
};
