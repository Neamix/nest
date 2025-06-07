import axios from "axios";

interface CallApiProps<T> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: T[] | null;
    headers?: Record<string, string>
}

export function callApi<T>({url,method = 'GET',data,headers}: CallApiProps<T>) {
    return axios({
        url: process.env.NEXT_PUBLIC_API_URL + url,
        method: method,
        data: data,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    })
}