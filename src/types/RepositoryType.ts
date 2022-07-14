import { DEFAULT_USER, User } from "./UserTypes";

export interface Repository {
  description: string,
  forks_count: number,
  html_url: string,
  name: string,
  owner: User,
  size: number,
  stargazers_count: number,
  subscribers_count: number,
}

export const DEFAULT_REPOSITORY: Repository = {
  description: '',
  forks_count: 0,
  html_url: '',
  name: '',
  owner: DEFAULT_USER,
  size: 0,
  stargazers_count: 0,
  subscribers_count: 0,
}