import React from "react";
import "./App.css";
import updateMovies from "./store/actions/updateMovies";
import fetchUsers from "./store/actions/fetchUsers";
import { connect } from "react-redux";
import Card from "./components/Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {

  const linkStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <Router>
      <div className="App">
        <h1>REDUX FETCH API</h1>
        <Link style={linkStyle} to="/">Home</Link>
        <br />
        <button onClick={props.fetchUsers}>FETCH USERS</button>
        <br />
        <div className="wrap">
          <div className="users">
            {(props.users.length === 0) ? <p>NO USERS</p> 
              : props.users.name.map((user) => (<Link style={linkStyle} key={user.id} to={`/${user.id}`} ><p>{user.first_name} - {user.email}</p></Link>))}
          </div>
          <div className="user-details">
            <Switch>
              {(props.users.length === 0) ? <p></p> 
                : props.users.name.map((user) => (<Route 
                                                    key={user.id}
                                                    path={`/${user.id}`} 
                                                    exact 
                                                    component={() => <Card 
                                                                        avatar={user.avatar}
                                                                        first_name={user.first_name}
                                                                        last_name={user.last_name}
                                                                        email={user.email}
                                                                        />
                                                              }
                                                  />)
                                      )}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users,
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(App);
