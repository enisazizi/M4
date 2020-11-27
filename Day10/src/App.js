
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Album from './components/Album';
import Artist from "./components/Artist";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home"
import NavbarH from './components/NavbarH';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarH />
        
        <Route path="/" exact component={Home} />
      <Route path="/Album" exact component={Album} />
      <Route path="/Artist" exact component={Artist} />

 
     </Router>
    </div>
  );
}

export default App;
