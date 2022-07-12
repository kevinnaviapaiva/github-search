import { useCallback, useState } from 'react';
import { API } from '../settings/server.conf';
import { useFetch } from "./fetch";

export const useUser = (userId: string) => {
  const [get] = useFetch();
  const [user, setUser] = useState<any>({});
  const [userRepositories, setUserRepositories] = useState<any[]>([]);
  const [userFollowers, setUserFollowers] = useState<any[]>([]);
  const [userFollowing, setUserFollowing] = useState<any[]>([]);
  return {
    user,
    userRepositories,
    userFollowers,
    userFollowing,
    loadUser: useCallback((onSucceed?: Function) => {
      get(API.USER.USER(userId), (data: any) => {
        setUser(data ?? {});
        onSucceed && onSucceed();
      })
    }, [get, setUser, userId]),
    loadUserRepositories: useCallback(() => {
      get(API.USER.REPOSITORIES(userId), (data: any) => {
        setUserRepositories(data ?? []);
      })
    }, [get, setUserRepositories, userId]),
    loadUserFollowers: useCallback(() => {
      get(API.USER.FOLLOWERS(userId), (data: any) => {
        setUserFollowers(data ?? []);
      })
    }, [get, setUserFollowers, userId]),
    loadUserFollowing: useCallback(() => {
      get(API.USER.FOLLOWING(userId), (data: any) => {
        setUserFollowing(data ?? []);
      })
    }, [get, setUserFollowing, userId]),
  }
}