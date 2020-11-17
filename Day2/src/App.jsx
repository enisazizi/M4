import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Footer from './components/Footer'
import LatestRelease from "./components/LatestRelease";
class App extends React.Component{
  render(){

    return (
     <>

      <Navbar />
      <Main />
     
      <LatestRelease />
      <Footer/>
     </>
    );

  }
  

}
 


export default App;
