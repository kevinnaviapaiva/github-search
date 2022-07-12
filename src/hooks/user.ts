import { useCallback, useState } from 'react';
import { API } from '../settings/server.conf';
import { Repository } from '../types/RepositoryType';
import { DEFAULT_USER, User } from '../types/UserTypes';
import { useFetch } from "./fetch";

export const useUser = (userId: string) => {
  const [get] = useFetch();
  const [user, setUser] = useState<User>(DEFAULT_USER);
  const [userRepositories, setUserRepositories] = useState<Repository[]>([]);
  const [userFollowers, setUserFollowers] = useState<User[]>([]);
  const [userFollowing, setUserFollowing] = useState<User[]>([]);
  return {
    user,
    userRepositories,
    userFollowers,
    userFollowing,
    loadUser: useCallback((userId: string, onSucceed?: Function, onError?: Function) => {
      get(API.USER.USER(userId), (data: any) => {
        setUser(data ?? {});
        onSucceed && onSucceed();
      }, () => {
        onError && onError();
      })
    }, [get]),
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