import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://63c652e7dcdc478e15bf1f66.mockapi.io";

export type UseAxiosResponse<T = any> = {
  response: T | null;
  error: AxiosError | null;
  loading: boolean;
};

export const useAxios = <T = any>(
  axiosParams: AxiosRequestConfig
): UseAxiosResponse<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result: AxiosResponse<T> = await axios.request<T>(params);
      setResponse(result.data as T);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only

  return { response, error, loading };
};
