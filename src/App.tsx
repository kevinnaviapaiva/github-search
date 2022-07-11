import './App.css';
import 'bulma/css/bulma.min.css';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';

export const App = () => {
  return (
    <div className="hero">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <Search />
      </div>
    </div>
  );
}

export default App;
