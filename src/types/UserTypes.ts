export interface User {
  avatar_url: string,
  followers: number,
  following: number,
  html_url: string,
  login: string,
  name: string,
  public_repos: number,
}

export const DEFAULT_USER: User = {
  avatar_url: '',
  followers: 0,
  following: 0,
  html_url: '',
  login: '',
  name: '',
  public_repos: 0,
}