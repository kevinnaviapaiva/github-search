import { useCallback } from 'react';

export const useFetch = () => {
  const request = useCallback((url: string, onSucceed?: any, onError?: any) => {
    fetch(url)
      .then(async (res) => {
        if(res.status < 400) {
          try {
            const data = await res.json();
            onSucceed?.(data);
          } catch (e) { 
            onSucceed?.();
          }
        } else {
          const data = await res.json();
          await onError?.(data);
        }
      })
      .catch((e) => {
        onError?.();
      });
  }, []);
  
  const get = useCallback((url: string, onSucceed?: any, onError?: any) => {
    request(url, onSucceed, onError);
  }, [request]);
  return [get];
}