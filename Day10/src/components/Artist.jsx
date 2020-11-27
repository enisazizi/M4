import React from 'react'
import "./Artist.css"
import logo from "../stramash.jpg"
import SideNavBar from "./SideNavbar"

class Artist extends React.Component{

    render(){
        return(
            <>
            <SideNavBar></SideNavBar>
        <div className="main-artist">

         <div className="shade" >
          <img src={logo} alt="" width="100%"/>
          <div className="shadeBg">  </div>
        </div>
        <div className="centered">
        <div>
        <p>33,000,575 MONTHLY LISTENERS</p>  
        <h1><b> Queen</b></h1>
        <input className="btn btn-success"type="button" value="Play"/>
        <input className="btn btn-primary-outline"type="button"  value="Follow"/>
        <div className="mt-5">
        <a href="#" className="mr-3 border1"  >OVERVIEW</a>
        <a href="#" className="mr-3"  >RELATED ARTIST</a>
        <a href="#" className="mr-3" >ABOUT</a>
        </div>
        </div>
      </div>
        
        </div>
     </>
        )
    }
}

export default Artist