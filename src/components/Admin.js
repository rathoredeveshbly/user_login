import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";

class Admin extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Welcome : {this.props.location.state.username}</h1>  
        <Link to="/logout">Logout</Link>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default Admin;
