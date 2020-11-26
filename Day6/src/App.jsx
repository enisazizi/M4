import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowDetails from "./components/ShowDetails"
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <NavBar path="/" /> */}
     

      <Route path="/details/:id" component={ShowDetails} />
      <Route path ="/login" exact component={Registration} /> 
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
