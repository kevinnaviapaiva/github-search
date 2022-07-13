import { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useRateLimit } from "../../hooks/rateLimit";
import { useUser } from "../../hooks/user";
import { Button, Card, Col, Hero, Icon, Image, Level, Media, Row, Subtitle, Title } from "../bulma";

export const UserView = () => {
  const paths = useLocation().pathname.split('/');
  const userId = paths[paths.length - 1];

  const [showRepo, setShowRepo] = useState<boolean>(false);
  const [showFollowers, setShowFollowers] = useState<boolean>(false);
  const [showFollowing, setShowFollowing] = useState<boolean>(false);

  const history = useHistory();

  const { 
    user, 
    userRepositories, 
    userFollowers, 
    userFollowing,
    loadUser, 
    loadUserRepositories, 
    loadUserFollowers,
    loadUserFollowing, 
  } = useUser(userId);

  const { rateLimit, getRateLimit } = useRateLimit();

  useEffect(() => {
    loadUser(userId, () => {
      loadUserRepositories();
    });
  }, []);

  useEffect(() => {
    if(showRepo) {
      loadUserRepositories();
    }
  }, [loadUserRepositories, showRepo]);

  useEffect(() => {
    if(showFollowers) {
      loadUserFollowers();
    }
  }, [loadUserFollowers, showFollowers]);

  useEffect(() => {
    if(showFollowing) {
      loadUserFollowing();
    }
  }, [loadUserFollowing, showFollowing]);

  return (
    <div>
      <Hero className="is-hero-bar is-main-hero">
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
              <Button className="is-link">Go to GitHub Profile</Button>
              </a>
            </Level.Right>
          </Level>
        </Hero.Body>
      </Hero>
      <section className="section is-main-section">
        <div className="tile is-ancestor has-text-centered is-family-code">
          <div className="tile is-parent">
            <div className="card tile is-child">
              <div className="card-content">
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
            <div className="card tile is-child">
              <div className="card-content">
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
            <div className="card tile is-child">
              <div className="card-content">
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
        <Row isDesktop>
          <Col>
            <div className="card">
              <Card.Header title="Repositories" icon={!showRepo && <Icon icon="fas solid fa-circle-plus"/>} onClick={() => { setShowRepo(true)}}/>
              {showRepo && <Card.Content>
                <Media.List>
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
                                    className="is-link"
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
                </Media.List>
              </Card.Content>}
            </div>
          </Col>
          <Col>
            <div className="card is-scrollable-height-medium">
              <Card.Header title="Followers" icon={!showFollowers && <Icon icon="fas solid fa-circle-plus"/>} onClick={() => { setShowFollowers(true)}}/>
              {showFollowers && <Card.Content>
                <Media.List>
                  {
                    userFollowers.map(user => (
                      <Media className="has-media-left">
                        <Media.Left>
                          <Image src={user.avatar_url} square={64} isRounded/>
                        </Media.Left>
                        <Media.Content>
                          <div className="content">
                            <p className="media-meta">
                              <strong>{user.login}</strong>
                            </p>
                          </div>
                          <Level className="is-mobile">
                            <Level.Right>
                              <Level.Item>
                                <Button 
                                  className="is-link"
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
                </Media.List>
              </Card.Content>}
            </div>
          </Col>
          <Col>
            <div className="card is-scrollable-height-medium">
              <Card.Header title="Following" icon={!showFollowing && <Icon icon="fas solid fa-circle-plus"/>} onClick={() => { setShowFollowing(true)}}/>
              {showFollowing && <Card.Content>
                <Media.List>
                  {
                    userFollowing.map(user => (
                      <Media className="has-media-left">
                        <Media.Left>
                          <Image src={user.avatar_url} square={64} isRounded/>
                        </Media.Left>
                        <Media.Content>
                          <div className="content">
                            <p className="media-meta">
                              <strong>{user.login}</strong>
                            </p>
                          </div>
                          <Level className="is-mobile">
                            <Level.Right>
                              <Level.Item>
                                <Button 
                                  className="is-link"
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
                </Media.List>
              </Card.Content>}
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}