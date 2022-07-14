import { useUserContext } from "../../context/userContext";
import { Button, Hero, Image, Level, Subtitle, Title } from "../bulma";

export const UserHeader = () => {
  const { user } = useUserContext();
  return (
    <Hero className="is-hero-bar is-main-hero is-small">
        <Hero.Body>
          <Level>
            <Level.Left>
              <Level.Item className="is-hero-avatar-item">
                <Image square={128} alt={user.name} isUserAvatar isRounded src={user.avatar_url}/>
              </Level.Item>
              <Level.Item className="is-hero-content-item">
                <div>
                  <Title size={2} isSpaced>{user.name}</Title>
                  <Subtitle size={4}>{user.login}</Subtitle>
                </div>
              </Level.Item>
            </Level.Left>
            <Level.Right>
              <a href={user.html_url}>
              <Button className="is-primary has-text-black">Go to GitHub Profile</Button>
              </a>
            </Level.Right>
          </Level>
        </Hero.Body>
      </Hero>
  );
};