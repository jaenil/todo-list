import { BrowserRouter as Router,Route,Switch } from 'react-router-dom' ;

import './App.scss';
import Home from './components/Home'
import NotFound from './components/notFound'

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router> 
  );
}

export default App;
