import React from 'react'
import './Navbar.css'
import { Link ,withRouter} from 'react-router-dom'

class Navbar extends React.Component {


    render(){
        return(
            <nav className="navbar navbar-expand-lg d-flex justify-content-center">
          <Link to="/"> <a className="nav-link" href="#">Trending</a></Link> 
          <Link to="/"><a className="nav-link" href="#" >Podcast</a></Link>  
          <Link to="/"><a className="nav-link" href="#" >Moods and Genres</a></Link> 
          <Link to="/"><a className="nav-link" href="#" >New releases</a></Link>  
          <Link to="/">  <a className="nav-link" href="#" >Discover</a>  </Link>  
        </nav>
        )
    }
}

export default withRouter(Navbar)