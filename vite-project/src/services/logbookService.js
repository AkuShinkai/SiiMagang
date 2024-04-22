// src/services/logbookService.js

import axiosClient from '../axios-client';

const getAll = () => {
  return axiosClient.get('/logbooks');
};

const create = (data) => {
  return axiosClient.post('/logbooks', data);
};

const update = (id, data) => {
  return axiosClient.put(`/logbooks/${id}`, data);
};

const remove = (id) => {
  return axiosClient.delete(`/logbooks/${id}`);
};

export default {
  getAll,
  create,
  update,
  remove
};
