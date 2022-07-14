import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Button, Content, Image, Level, Media } from "../bulma"

export const FollowersList = () => {
  const { userId, setGetUserFollowers, userFollowers } = useUserContext();

  useEffect(() => {
    if(userFollowers.length === 0) {
      setGetUserFollowers(true);
    }
  }, [setGetUserFollowers, userId, userFollowers.length]);

  const history = useHistory();

  return (
    <>
      {
        userFollowers.map(user => (
          <Media className="has-media-left">
            <Media.Left>
              <Image src={user.avatar_url} square={64} isRounded/>
            </Media.Left>
            <Media.Content>
              <Content>
                <p className="media-meta">
                  <strong>{user.login}</strong>
                </p>
              </Content>
              <Level className="is-mobile">
                <Level.Right>
                  <Level.Item>
                    <Button 
                      className="is-primary has-text-black"
                      onClick={() => {
                        history.push(`/user/${user.login}`)
                      }}
                    >
                      View
                    </Button>
                  </Level.Item>
                </Level.Right>
              </Level>
            </Media.Content>
          </Media>
        ))
      }
    </>
  )
}