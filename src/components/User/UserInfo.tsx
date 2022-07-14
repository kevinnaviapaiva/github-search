import { useUserContext } from "../../context/userContext";
import { Level, Subtitle, Title } from "../bulma"

export const UserInfo = () => {
  const { user } = useUserContext();
  return (
    <div className="tile is-ancestor has-text-centered is-family-code">
      <div className="tile is-parent">
        <div className="card tile is-child has-background-primary">
          <div className="card-content info">
            <Level className="is-mobile">
              <Level.Item>
                <div className="is-widget-label">
                  <Subtitle size={3} isSpaced>Repos</Subtitle>
                  <Title size={1}>{user.public_repos}</Title>
                </div>
              </Level.Item>
            </Level>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="card tile is-child has-background-primary">
          <div className="card-content info">
            <Level className="is-mobile">
              <Level.Item>
                <div className="is-widget-label">
                  <Subtitle size={3} isSpaced>Followers</Subtitle>
                  <Title size={1}>{user.followers}</Title>
                </div>
              </Level.Item>
            </Level>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="card tile is-child has-background-primary">
          <div className="card-content info">
            <Level className="is-mobile">
              <Level.Item>
                <div className="is-widget-label">
                  <Subtitle size={3} isSpaced>Following</Subtitle>
                  <Title size={1}>{user.following}</Title>
                </div>
              </Level.Item>
            </Level>
          </div>
        </div>
      </div>
    </div>
  )
}