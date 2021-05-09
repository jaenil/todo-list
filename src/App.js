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

/*
Objectives to be learnt:
  read a list of tasks.
  add a task using the mouse or keyboard.
  mark any task as completed, using the mouse or keyboard.
  delete any task, using the mouse or keyboard.
  edit any task, using the mouse or keyboard.
  view a specific subset of tasks: All tasks, only the active task, or only the completed tasks.
*/

export default App;
