import React from 'react'

import { Link } from 'react-router-dom'
import "./Home.css"


class NavbarH extends React.Component {


    render(){
        return(

            <nav className="navbar navbar-expand-lg d-flex justify-content-center">
            <Link to="/" className="nav-link"  >Home</Link>
            <Link to="/Album" className="nav-link"  >Album</Link>
            <Link to="/Artist" className="nav-link"  >Artist</Link>
            
        </nav>
        )
    }
}

export default NavbarH