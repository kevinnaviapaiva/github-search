import { useCallback, useState } from 'react';
import { API } from '../settings/server.conf';
import { DEFAULT_REPOSITORY, Repository } from '../types/RepositoryType';
import { useFetch } from "./fetch";

export const useRepository = () => {
  const [get] = useFetch();
  const [repository, setRepository] = useState<Repository>(DEFAULT_REPOSITORY);
  return {
    repository,
    loadRepository: useCallback((owner: string, repo: string) => {
      get(API.REPOSITORY.REPOSITORY(owner, repo), (data: any) => {
        setRepository(data ?? {});
      })
    }, [get, setRepository]),
  }
}