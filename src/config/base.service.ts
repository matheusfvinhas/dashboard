import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {
    private axios: AxiosInstance = axios.create({
        baseURL: 'https://demo2697181.mockable.io',
        timeout: 150000,
    });

    constructor() {
        this.axios.interceptors.request.use(
            (config: AxiosRequestConfig): AxiosRequestConfig => {
                config.headers['Content-Type'] = 'application/json';
                return config;
            },
            (error: string): Promise<never> => Promise.reject(error)
        );
    }

    protected post = async (url: string, body: any, params?: any): Promise<any> => {
        try {
            const result: AxiosResponse = await this.axios.post(url, body, params);
            return result.data;
        } catch (error) {
            throw (error.response && error.response.data) || 'Erro interno';
        }
    };

    protected put = async (url: string, body: any, params?: any): Promise<any> => {
        try {
            const result: AxiosResponse = await this.axios.put(url, body, params);
            return result.data;
        } catch (error) {
            throw (error.response && error.response.data) || 'Erro interno';
        }
    };

    protected patch = async (url: string, body: any, params?: any): Promise<any> => {
        try {
            const result: AxiosResponse = await this.axios.patch(url, body, params);
            return result.data;
        } catch (error) {
            throw (error.response && error.response.data) || 'Erro interno';
        }
    };

    protected get = async (url: string, params?: any): Promise<any> => {
        try {
            const result: AxiosResponse = await this.axios.get(url, params);
            return result.data;
        } catch (error) {
            throw (error.response && error.response.data) || 'Erro interno';
        }
    };

    protected delete = async (url: string, params?: any): Promise<any> => {
        try {
            const result: AxiosResponse = await this.axios.delete(url, params);
            return result.data;
        } catch (error) {
            throw (error.response && error.response.data) || 'Erro interno';
        }
    };
}
