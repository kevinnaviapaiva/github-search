import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useRepository } from "../../hooks/repository";
import { Button, Hero, Level, Subtitle, Title } from "../bulma";

export const RepositoryView = () => {
  const paths = useLocation().pathname.split('/');
  const repositoryId = paths[paths.length - 1];
  const owner = paths[paths.length - 2];

  const { repository, loadRepository } = useRepository();

  useEffect(() => {
    if(owner && repositoryId) {
      loadRepository(owner, repositoryId);
    }
  }, [loadRepository, owner, repositoryId])

  console.log(repository);

  return (
    <div>
      <Hero className="is-hero-bar is-main-hero is-small">
        <Hero.Body>
          <Level>
            <Level.Left>
              <Level.Item className="is-hero-content-item">
                <div>
                  <Title size={2} isSpaced>{repository.name}</Title>
                  <Subtitle size={4} isSpaced>{repository?.owner?.login}</Subtitle>
                  <Subtitle size={5}>{repository?.description}</Subtitle>
                </div>
              </Level.Item>
            </Level.Left>
            <Level.Right>
              <a href={repository.html_url}>
              <Button className="is-primary has-text-black">Go to GitHub Repository</Button>
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
                      <Subtitle size={3} isSpaced>Forks</Subtitle>
                      <Title size={1}>{repository.forks_count}</Title>
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
                      <Subtitle size={3} isSpaced>Subscribers</Subtitle>
                      <Title size={1}>{repository.subscribers_count}</Title>
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
                      <Subtitle size={3} isSpaced>Stars</Subtitle>
                      <Title size={1}>{repository.stargazers_count}</Title>
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
                      <Subtitle size={3} isSpaced>Size</Subtitle>
                      <Title size={1}>{repository.size}</Title>
                    </div>
                  </Level.Item>
                </Level>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}