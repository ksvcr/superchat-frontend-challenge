import { useState, useMemo, useCallback } from 'react';
import { RepositoryRequestParams, RepositoryData } from 'shared/types';

export const useGetRepository = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<RepositoryData>();

  const handleGetRepository = useCallback(async (params: RepositoryRequestParams) => {
    setLoading(true);
    setError(undefined);
    const searchParams = new URLSearchParams(params);

    return fetch(`api/repository?${searchParams}`)
      .then(async res => {
        const data = await res.json();

        if (!res.ok) {
          const error = (data && data.message) || res.statusText;
          throw Error(error);
        }

        setData(data);
        setLoading(false);

        return data;
      })
      .catch(error => {
        setLoading(false);

        if (error instanceof Error) {
          setError(error.message);
        }
      });
  }, []);

  return useMemo(
    () => ({ handleGetRepository, meta: { isLoading, error, data } }),
    [isLoading, error, data, handleGetRepository]
  );
};
