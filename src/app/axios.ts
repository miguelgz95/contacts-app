import Axios, { AxiosRequestConfig } from "axios";

const axios = Axios.create({
    baseURL: "",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
    },
    withCredentials: true,
});

export default axios;

export const getConnector = (
    path: string,
    params?: Filters,
    headers?: object,
    options?: object
) => {
    return axios.get(path, { params, headers, ...options });
};
