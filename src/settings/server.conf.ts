const URL = process.env.REACT_APP_API_URI;

export const URL_BASE = {
  BASE: URL,
}

export const API = {
  URL_BASE: '',
  REPOSITORY: {
    REPOSITORY: (owner: string, repo: string) => {
      return `${URL_BASE.BASE}/repos/${owner}/${repo}`;
    }
  },
  SEARCH: {
    SEARCH: (searchType: string, queryText: string) => {
      return `${URL_BASE.BASE}/search/${searchType}?q=${queryText}`;
    },
  },
  USER: {
    FOLLOWERS: (id: string) => {
      return `${URL_BASE.BASE}/users/${id}/followers`;
    },
    FOLLOWING: (id: string) => {
      return `${URL_BASE.BASE}/users/${id}/following`;
    },
    REPOSITORIES: (id: string) => {
      return `${URL_BASE.BASE}/users/${id}/repos`;
    },
    USER: (id: string) => {
      return `${URL_BASE.BASE}/users/${id}`;
    },
  },
  RATE_LIMIT: {
    RATE_LIMIT: () => {
      return `${URL_BASE.BASE}/rate_limit`
    }
  }
}