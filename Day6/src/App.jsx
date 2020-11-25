import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowDetails from "./components/ShowDetails"
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
     

      <Route path="/details/:id" component={ShowDetails} />
     
      <Footer />
    </div>
    </Router>
  );
}

export default App;
