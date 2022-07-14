import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useUser } from '../hooks/user';
import { Repository } from '../types/RepositoryType';
import { DEFAULT_USER, User } from '../types/UserTypes';

type UserContextType = {
  user: User,
  userId: string,
  loadUser: Function,
  userRepositories: Repository[],
  setGetUserRepos: React.Dispatch<React.SetStateAction<boolean>>,
  userFollowers: User[],
  setGetUserFollowers: React.Dispatch<React.SetStateAction<boolean>>,
  userFollowing: User[],
  setGetUserFollowing: React.Dispatch<React.SetStateAction<boolean>>, 
}

export const DEFAULT_USER_CONTEXT_TYPE: UserContextType = {
  user: DEFAULT_USER,
  userId: '',
  loadUser: () => {},
  userRepositories: [],
  setGetUserRepos: () => {},
  userFollowers: [],
  setGetUserFollowers: () => {},
  userFollowing: [],
  setGetUserFollowing: () => {},
}

const UserContext = React.createContext<UserContextType>(DEFAULT_USER_CONTEXT_TYPE);

export const UserContextProvider = ({ children, userId } : PropsWithChildren<{ userId: string}>) => {
  const [getUserRepos, setGetUserRepos] = useState<boolean>(false);
  const [getUserFollowers, setGetUserFollowers] = useState<boolean>(false);
  const [getUserFollowing, setGetUserFollowing] = useState<boolean>(false);  
  
  const { 
    user, 
    loadUser, 
    userRepositories, 
    loadUserRepositories,
    userFollowers,
    loadUserFollowers,
    userFollowing,
    loadUserFollowing, 
  } = useUser(userId);

  useEffect(() => {
    if(userId && userId !== '') {
      loadUser(userId);
      setGetUserRepos(false);
      setGetUserFollowers(false);
      setGetUserFollowing(false);
    }
  }, [userId]);

  useEffect(() => {
    if(getUserRepos) {
      loadUserRepositories();
    }
  }, [getUserRepos, loadUserRepositories]);

  useEffect(() => {
    if(getUserFollowers) {
      loadUserFollowers();
    }
  }, [getUserFollowers, loadUserFollowers]);

  useEffect(() => {
    if(getUserFollowing) {
      loadUserFollowing();
    }
  }, [getUserFollowing, loadUserFollowing]);

  return (
    <UserContext.Provider value={{ 
      user: user, 
      loadUser: loadUser,
      userRepositories: userRepositories, 
      setGetUserRepos: setGetUserRepos,
      userFollowers: userFollowers,
      setGetUserFollowers: setGetUserFollowers,
      userFollowing: userFollowing,
      setGetUserFollowing: setGetUserFollowing,
      userId: userId 
    }}>
      {children}
    </UserContext.Provider>
  )
};

export const useUserContext = () => React.useContext(UserContext);