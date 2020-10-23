import React  from 'react';
import './App.css';
import 'tachyons';
import UserList from './UserList';
import Navb from './Navb';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import User from './User';

function App() {
 return (

  <div className="App">

   <Navb />

   <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/users' component={UserList} />
     <Route  path='/users/:id' component={User} />
   </Switch>
    </div>
  );
}

export default App;
