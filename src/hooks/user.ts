import { useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    setUserRepositories([]);
    setUserFollowers([]);
    setUserFollowing([]);
  }, [userId]);
  
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
    loadUserRepositories: useCallback((onSucceed?: Function) => {
      get(API.USER.REPOSITORIES(userId), (data: any) => {
        setUserRepositories(data ?? []);
        onSucceed && onSucceed();
      })
    }, [get, setUserRepositories, userId]),
    loadUserFollowers: useCallback((onSucceed?: Function) => {
      get(API.USER.FOLLOWERS(userId), (data: any) => {
        setUserFollowers(data ?? []);
        onSucceed && onSucceed();
      })
    }, [get, setUserFollowers, userId]),
    loadUserFollowing: useCallback((onSucceed?: Function) => {
      get(API.USER.FOLLOWING(userId), (data: any) => {
        setUserFollowing(data ?? []);
        onSucceed && onSucceed();
      })
    }, [get, setUserFollowing, userId]),
  }
}