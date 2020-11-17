import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonmock.hackerrank.com/api/movies' ,
  responseType: 'json',
});

const httpHeaders = (isSecure) => {
  let options = {
    'Content-Type': 'application/json',
  };
  if (isSecure) {
    /*check for user token*/
    // options['Authorization'] = getItem('token');
  }
  return options;
};

const get = (url, { params = {} } = {}, isSecure = false) => {
  return new Promise((resolve, reject) => {
    http
      .get(url, {
        headers: httpHeaders(isSecure),
        params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const post = (url, data = {}, { params = {} } = {}, isSecure) => {
  return new Promise((resolve, reject) => {
    http
      .post(url, data, { headers: httpHeaders(isSecure), params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const put = (url, data = {}, { params = {} } = {}, isSecure) => {
  return new Promise((resolve, reject) => {
    http
      .put(url, data, { headers: httpHeaders(isSecure) })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const patch = (url, data = {}, { params = {} } = {}, isSecure) => {
  return new Promise((resolve, reject) => {
    http
      .patch(url, data, { headers: httpHeaders(isSecure) })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const remove = (url, isSecure) => {
  return new Promise((resolve, reject) => {
    http
      .delete(url, { headers: httpHeaders(isSecure) })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const axiosApi = { get, post, put,patch, remove};
