import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { UserContextProvider } from '../../context/userContext';
import { Card, Col, Icon, Media, Row } from "../bulma";
import { FollowersList } from './FollowersList';
import { FollowingList } from './FollowingList';
import { RepoList } from './RepoList';
import { UserHeader } from './UserHeader';
import { UserInfo } from './UserInfo';
import './User.scss';

export const UserView = () => {
  const paths = useLocation().pathname.split('/');
  const userId = paths[paths.length - 1];

  const [showRepo, setShowRepo] = useState<boolean>(false);
  const [showFollowers, setShowFollowers] = useState<boolean>(false);
  const [showFollowing, setShowFollowing] = useState<boolean>(false);

  useEffect(() => {
    setShowRepo(false);
    setShowFollowers(false);
    setShowFollowing(false);
  }, [userId]);

  return (
    <UserContextProvider userId={userId}>
      <UserHeader />
      <section className="section is-main-section">
        <UserInfo />
        <Row isDesktop>
          <Col>
            <div className="card">
              <Card.Header title="Repositories" icon={<Icon icon={`fas solid fa-lg fa-circle-${showRepo ? 'minus' : 'plus'}`}/>} onClick={() => { setShowRepo(prevState => !prevState) }}/>
              {showRepo && <Card.Content>
                <Media.List>
                  <RepoList />
                </Media.List>
              </Card.Content>}
            </div>
          </Col>
          <Col>
            <div className="card is-scrollable-height-medium">
              <Card.Header title="Followers" icon={<Icon icon={`fas solid fa-lg fa-circle-${showFollowers ? 'minus' : 'plus'}`}/>} onClick={() => { setShowFollowers(prevState => !prevState)}}/>
              {showFollowers && <Card.Content>
                <Media.List>
                  <FollowersList /> 
                </Media.List>
              </Card.Content>}
            </div>
          </Col>
          <Col>
            <div className="card is-scrollable-height-medium">
              <Card.Header title="Following" icon={<Icon icon={`fas solid fa-lg fa-circle-${showFollowing ? 'minus' : 'plus'}`}/>} onClick={() => { setShowFollowing(prevState => !prevState)}}/>
              {showFollowing && <Card.Content>
                <Media.List>
                  <FollowingList />
                </Media.List>
              </Card.Content>}
            </div>
          </Col>
        </Row>
      </section>
    </UserContextProvider>
  );
}