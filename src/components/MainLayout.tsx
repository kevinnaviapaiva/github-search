import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SearchView } from './Search/Search';
import { Navbar } from './Navbar/Navbar';
import { UserView } from './User/UserView';
import { RepositoryView } from './Repository/RepositoryView';
import { Error } from './Error/Error';

export const MainLayout = () => {
  return (  
    <Router basename={process.env.PUBLIC_URL}>
      {/*<Modal active={true}>
        <Media>
          <Media.Content>
            <Content>
              <p>
                <strong>You reach the rate limit</strong>
                <br />
                Only it is allowed 60 searchs per hour<br />
                00:00:00
              </p>
            </Content>
          </Media.Content>
        </Media>
      </Modal>*/}
      <Switch>
        <Route exact path="/">
          <Redirect to="/search/users" />
        </Route>
        <Route exact path="/search">
          <Redirect to="/search/users" />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
        <Route path="/search/:type">
          <Navbar />
          <SearchView />
        </Route>
        <Route exact path="/user/:id">
          <Navbar />
          <UserView />
        </Route>
        <Route exact path="/repos/:owner/:id/">
          <Navbar />
          <RepositoryView />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </Router>
  )
}