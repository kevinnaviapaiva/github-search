import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Search } from './Search/Search';
import { Navbar } from './Navbar/Navbar';

export const history = createBrowserHistory();

export const MainLayout = () => {
  return (  
    <div className="hero">
      <Router history={history}>
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <Switch>
            <Route exact path="/">
              <Redirect to="/search" />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/user">
              <Search />
            </Route>
            <Route exact path="/repository">
              <Search />
            </Route>
            <Redirect to="/error" />
          </Switch>
        </div>
      </Router>
    </div>
  )
}