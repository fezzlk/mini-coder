import axiosBase, { AxiosInstance, AxiosResponse } from 'axios';

class RestClient {
  axios: AxiosInstance;
  accessToken?: string;

  constructor() {
    this.axios = axiosBase.create({
      baseURL: process.env.BACKEND_SERVER_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json',
    });
    this.axios.defaults.withCredentials = true;
}

  async apiGet(url: string, query = {}): Promise<AxiosResponse> {
    try {
      return await this.axios.get(`/api/v1${url}`, { ...query });
    } catch (err: any) {
      throw new Error();
    }
  }

  async apiPost<T>(url: string, body = {}): Promise<AxiosResponse<T>> {
    try {
      return await this.axios.post(`/api/v1${url}`, body);
    } catch (e) {
      throw new Error();
    }
  }

  async apiPut<T>(url: string, body = {}): Promise<AxiosResponse<T>> {
    try {
      return await this.axios.put(`/api/v1${url}`, body);
    } catch (e) {
      throw new Error();
    }
  }

  async apiDelete<T>(url: string, body = {}): Promise<AxiosResponse<T>> {
    try {
      return await this.axios.delete(`/api/v1${url}`, { data: body });
    } catch (e) {
      throw new Error();
    }
  }
}

export const restClient = new RestClient();
