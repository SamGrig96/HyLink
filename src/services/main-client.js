import axios from 'axios';
import routes from 'constants/routes';
import { notification } from 'antd';
import { getAccessToken, emptyState } from '../configs/localStorage';
import { API_ROOT } from '../configs/env-vars';

// overwrite native Promise implementation with Bluebird's
window.Promise = Promise;
// eslint-disable-next-line import/no-anonymous-default-export
export default (headers = {}) => {
  const service = axios.create({
    baseURL: API_ROOT, // url of the api
    headers: {
      Authorization: getAccessToken() ? 'Bearer '.concat(getAccessToken()) : '',
      ...headers,
    },
  });
  service.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const errorResponse = error.response;

      switch (errorResponse.status) {
        case 404:
          window.location.pathname = routes.notFound.pathname;
          break;
        // case 403:
        //   window.location.pathname = '/not-permitted';
        //   break;
        default:
          break;
      }
      if (errorResponse.status === 401) {
        notification.error({
          message: 'Authorization',
          description: 'Error with Authorization!',
          onClick: () => {},
        });
        setTimeout(() => {
          emptyState();
          window.location.pathname = '/sign-in';
        }, '2000');
      }
      throw error;
    }
  );
  return service;
};
