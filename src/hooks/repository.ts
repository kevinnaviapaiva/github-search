import { useCallback, useState } from 'react';
import { API } from '../settings/server.conf';
import { useFetch } from "./fetch";

export const useRepository = () => {
  const [get] = useFetch();
  const [repository, setRepository] = useState<any>({});
  return {
    repository,
    loadRepository: useCallback((owner: string, repo: string) => {
      get(API.REPOSITORY.REPOSITORY(owner, repo), (data: any) => {
        setRepository(data ?? {});
      })
    }, [get, setRepository]),
  }
}