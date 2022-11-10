import client from './main-client';

export const fetchNotificationsApi = params => client().get('/users', { params });
export const fetchUserApi = params => client().get(`/users/${params.name}`);
