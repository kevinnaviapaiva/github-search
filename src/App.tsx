import './App.css';
import 'bulma/css/bulma.min.css';
import { MainLayout } from './components/MainLayout';

export const App = () => {
  /*return (
    <div className="hero">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <Search />
      </div>
    </div>
  );*/
  return (
    <MainLayout />
  );
}

export default App;
