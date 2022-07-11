import { useCallback, useState } from 'react';
import { useFetch } from "./fetch";

export const useUser = () => {
  const [get] = useFetch();
  const [userList, setUserList] = useState<Array<any>>([]);
  return {
    userList,
    loadUserList: useCallback(() => {
      get('https://api.github.com/users', (data: any) => {
        setUserList(data ?? []);
      })
    }, [get]),
  }
}