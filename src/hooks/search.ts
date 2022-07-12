import { useCallback, useState } from 'react';
import { API } from '../settings/server.conf';
import { Repository } from '../types/RepositoryType';
import { User } from '../types/UserTypes';
import { useFetch } from "./fetch";

export const useSearch = (searchType: string) => {
  const [get] = useFetch();
  const [data, setData] = useState<Array<User | Repository>>([]);
  return {
    data,
    loadData: useCallback((search: string) => {
      if(search.length > 0) {
        get(API.SEARCH.SEARCH(searchType, search), (data: any) => {
         setData(data?.items ?? []);
        });
      } else {
        setData([]);
      }
    }, [get, searchType]),
  }
}