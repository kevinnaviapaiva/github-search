import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRateLimit } from "../../hooks/rateLimit";
import { useUser } from "../../hooks/user";
import { Button, Card, Col, Image, Row, Subtitle, Title } from "../bulma";

export const UserView = () => {
  const paths = useLocation().pathname.split('/');
  const userId = paths[paths.length - 1];

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
      loadUserFollowers();
      loadUserFollowing();
      getRateLimit();
    }, () => {
      getRateLimit();
    });
  }, []);

  return (
    <div>
      <section className="hero is-hero-bar is-main-hero">
        <div className="hero-body">
          <div className="level">
            <div className="level-left">
              <div className="level-item is-hero-avatar-item">
                <Image square={128} alt={user.name} isUserAvatar isRounded src={user.avatar_url}/>
              </div>
              <div className="level-item is-hero-content-item">
                <div>
                  <Title size={2} isSpaced>{user.name}</Title>
                  <Subtitle size={4}>{user.login}</Subtitle>
                </div>
              </div>
            </div>
            <div className="level-right">
              <a href={user.html_url}>
              <Button className="is-link">Go to GitHub Profile</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-main-section">
        <div className="tile is-ancestor has-text-centered is-family-code">
          <div className="tile is-parent">
            <div className="card tile is-child">
              <div className="card-content">
                <div className="level is-mobile">
                  <div className="level-item">
                    <div className="is-widget-label">
                      <Subtitle size={3} isSpaced>Repos</Subtitle>
                      <Title size={1}>{user.public_repos}</Title>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="card tile is-child">
              <div className="card-content">
                <div className="level is-mobile">
                  <div className="level-item">
                    <div className="is-widget-label">
                      <Subtitle size={3} isSpaced>Followers</Subtitle>
                      <Title size={1}>{user.followers}</Title>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="card tile is-child">
              <div className="card-content">
                <div className="level is-mobile">
                  <div className="level-item">
                    <div className="is-widget-label">
                      <Subtitle size={3} isSpaced>Following</Subtitle>
                      <Title size={1}>{user.following}</Title>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row isDesktop>
          <Col>
            <div className="card">
              <Card.Header title="Repositories" />
              <Card.Content>
                <div className="media-list">
                  {
                    userRepositories.map(repo => (
                      <article className="media">
                        <div className="media-content">
                          <div className="content">
                            <p className="media-meta">
                              <strong>{repo.name}</strong>
                            </p>
                            <div>{repo.description}</div>
                            <div className="level is-mobile">
                              <div className="level-right">
                                <div className="level-item">
                                  <Button 
                                    className="is-link"
                                    onClick={() => {
                                      history.push(`/repos/${user.login}/${repo.name}`)
                                    }}
                                  >
                                    See more
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  }
                </div>
              </Card.Content>
            </div>
          </Col>
          <Col>
            <div className="card is-scrollable-height-medium">
              <Card.Header title="Followers" />
              <Card.Content>
                <div className="media-list">
                  {
                    userFollowers.map(user => (
                      <article className="media has-media-left">
                        <div className="media-left">
                          <Image src={user.avatar_url} square={64} isRounded/>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p className="media-meta">
                              <strong>{user.login}</strong>
                            </p>
                          </div>
                          <div className="level is-mobile">
                            <div className="level-right">
                              <div className="level-item">
                                <Button 
                                  className="is-link"
                                  onClick={() => {
                                    history.push(`/user/${user.login}`)
                                  }}
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  }
                </div>
              </Card.Content>
            </div>
          </Col>
          <Col>
            <div className="card is-scrollable-height-medium">
              <Card.Header title="Following" />
              <Card.Content>
                <div className="media-list">
                  {
                    userFollowing.map(user => (
                      <article className="media has-media-left">
                        <div className="media-left">
                          <Image src={user.avatar_url} square={64} isRounded/>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p className="media-meta">
                              <strong>{user.login}</strong>
                            </p>
                          </div>
                          <div className="level is-mobile">
                            <div className="level-right">
                              <div className="level-item">
                              <Button 
                                  className="is-link"
                                  onClick={() => {
                                    history.push(`/user/${user.login}`)
                                  }}
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  }
                </div>
              </Card.Content>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}