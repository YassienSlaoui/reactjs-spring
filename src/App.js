import logo from './logo.svg';
import './App.css';
import ListUser from './component/listUser';
import AddUser  from './component/addUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <div>
        <Router>

                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListUser}></Route>
                          <Route path = "/users" component = {ListUser}></Route>
                          <Route path = "/add-user/:id" component = {AddUser}></Route>
                          <Route path = "/update-user/:id" component = {AddUser}></Route>
                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
