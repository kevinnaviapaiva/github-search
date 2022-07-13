import { useCallback, useState } from 'react';
import { API } from "../settings/server.conf";
import { useFetch } from "./fetch"

export const useRateLimit = () => {
  const [get] = useFetch();
  const [rateLimit, setRateLimit] = useState<any>({});

  return {
    rateLimit,
    getRateLimit: useCallback(() => {
      get(API.RATE_LIMIT.RATE_LIMIT(), (data: any) => {
        setRateLimit(data ?? {});
      })
    }, [get]),
  }
}