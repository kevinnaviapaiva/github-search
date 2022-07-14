import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Button, Level, Media } from "../bulma"

export const RepoList = () => {
  const { user, userId, setGetUserRepos, userRepositories } = useUserContext();

  useEffect(() => {
    if(userRepositories.length === 0) {
      setGetUserRepos(true);
    }
  }, [setGetUserRepos, userId, userRepositories.length]);

  const history = useHistory();

  return (
    <>
      {
        userRepositories.map(repo => (
          <Media>
            <Media.Content>
              <div className="content">
                <p className="media-meta">
                  <strong>{repo.name}</strong>
                </p>
                <div>{repo.description}</div>
                <Level className="is-mobile">
                  <Level.Right>
                    <Level.Item>
                      <Button 
                        className="is-primary has-text-black"
                        onClick={() => {
                          history.push(`/repos/${user.login}/${repo.name}`)
                        }}
                      >
                        See more
                      </Button>
                    </Level.Item>
                  </Level.Right>
                </Level>
              </div>
            </Media.Content>
          </Media>
        ))
      }
    </>
  )
}