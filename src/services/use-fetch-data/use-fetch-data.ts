import { useCallback, useState } from "react";

// This is not secure and needs to be stored on the BE or used Access Token instead together with the server
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type Params = {
  url: string;

  headers?: Record<string, string>;
  method: "GET" | "POST";
};

export const useFetchData = <T extends unknown>({
  url,
  method,
  headers,
}: Params) => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();

  const fetchData = useCallback(
    async (body?: Record<string, unknown>) => {
      setIsLoading(true);
      setError(undefined);

      try {
        const response = await fetch(`${API_BASE_URL}/${url}`, {
          method,
          ...(body ? { body: JSON.stringify(body) } : {}),
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "content-type": "application/json",
            ...headers,
          },
        });
        const result: T = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    },
    [headers, method, url]
  );

  return {
    loading,
    data,
    error,
    fetchData,
  };
};
