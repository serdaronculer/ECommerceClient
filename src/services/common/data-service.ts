import http from '@/http-common';
import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

class DataService {

    private url(requestParameter: Partial<RequestParameters>) {
        let configuration: AxiosRequestConfig;
        const url = `${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
        configuration = { url: url, baseURL: requestParameter.baseUrl, headers: requestParameter.headers }
        return configuration;
    }
    async getSingle<T>(requestParameter: Partial<RequestParameters>, id: string): Promise<AxiosResponse<T, any>> {
        let configuration = this.url(requestParameter);
        configuration.url += `/${id}`;
        configuration.method = "get";
        return http<T>(configuration);
    }

    post<T>(requestParameter: Partial<RequestParameters>, body : Partial<T>) : Promise<AxiosResponse<T, any>>  {
        let configuration = this.url(requestParameter);
        configuration.method = "post";
        configuration.data = body;
       return http<T>(configuration);
    }

    put<T>(requestParameter: Partial<RequestParameters>, body : Partial<T>) : Promise<AxiosResponse<T, any>>  {
        let configuration = this.url(requestParameter);
        configuration.method = "put";
        configuration.data = body;
       return http<T>(configuration);
    }

    delete<T>(requestParameter: Partial<RequestParameters>, id: string ) : Promise<AxiosResponse<T, any>>  {
        let configuration = this.url(requestParameter);
        configuration.url+= `/${id}`;
        configuration.method = "delete";
       return http<T>(configuration);
    }
}

export class RequestParameters {
    controller?: string;
    action?: string;
    headers?: AxiosRequestHeaders;
    baseUrl?: string;
}

export default DataService