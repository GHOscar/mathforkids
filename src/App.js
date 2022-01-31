import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostsList } from './PostsList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PostsList} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
