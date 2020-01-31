import React from 'react';
import './App.css';
import Signup from './components/Signup';
import { Route, withRouter, Redirect} from "react-router-dom";
import Login from './components/Login';
import Jokes from './components/Jokes';

function App() {

  return (
    <div className="App">
      <Route exact path={"/"} component={Signup} />

      <Route exact path={"/login"}  render={(props)=>{
            return <Login {...props}/>
          }}
          />
      <PrivateRoute
            exact
            path="/jokes"
            component={Jokes}
          />
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default withRouter(App);
