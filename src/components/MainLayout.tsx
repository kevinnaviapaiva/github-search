import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SearchView } from './Search/Search';
import { Navbar } from './Navbar/Navbar';
import { UserView } from './User/UserView';
import { RepositoryView } from './Repository/RepositoryView';
import { Hero } from './bulma';

export const history = createBrowserHistory();

export const MainLayout = () => {
  return (  
    <Hero>
      <Router history={history}>
        <Hero.Head>
          <Navbar />
        </Hero.Head>
        <Hero.Body>
          <Switch>
            <Route exact path="/">
              <Redirect to="/search/users" />
            </Route>
            <Route path="/search/:type">
              <SearchView />
            </Route>
            <Route exact path="/user/:id">
              <UserView />
            </Route>
            <Route exact path="/repos/:owner/:id/">
              <RepositoryView />
            </Route>
            <Redirect to="/error" />
          </Switch>
        </Hero.Body>
      </Router>
    </Hero>
  )
}