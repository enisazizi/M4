import React from 'react'
import './SideNavbar.css'


class SideNavbar extends React.Component{

    render(){
        return(
            <nav className="spotify-side-nav">
            <div className="toggler-side-nav" onclick="hide()">
              <i className="fas fa-caret-right"></i>
            </div>
            <div className="nav-title">
              <i className="fab fa-spotify"></i>
              <h3>Strive Spotify</h3>
            </div>
            <div className="nav-menu">
              <div className="list">
                <ol>
                  <li>
                    <i className="fas fa-home"></i>
                    <a href="home.html">Home</a>
                  </li>
                  <li>
                    <i className="fas fa-search"></i>
                    <a href="#">Search</a>
                  </li>
                  <li>
                    <ion-icon name="library-outline"></ion-icon>
                    <a href="library.html">Library</a>
                  </li>
                </ol>
              </div>
              <div className="user">
                <div className="user-image">
                  <img src="https://placehold.it/30x30" alt="" />
                </div>
                <a href="login.html">User name</a>
              </div>
            </div>
          </nav>
        )
    }
}

export default SideNavbar