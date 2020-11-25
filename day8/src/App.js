import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import DishDetails from "./components/DishDetails";
import Menu from "./components/Menu";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" />
          <Route
            path="/"
            exact
            render={(
              props // props are history, location, match
            ) => <Home title="Stefano" {...props} />} // in this way you can pass your own props along with the router ones
          />
          <Route path="/menu" exact component={Menu} />
          <Route path="/reservation" exact 
          render={(
            props 
          ) => <Reservations header="Reservation12" {...props}/>}/>
          <Route path="/details/:stefano" component={DishDetails} />
        </Router>
      </>
    );
  }
}

export default App;
