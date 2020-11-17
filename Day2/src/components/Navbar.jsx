import React from "react"

import {Navbar,Nav} from 'react-bootstrap';


const myNav = ()=>{
    return(


        <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
         
        </Navbar>
    </div>

    
    )

}


export default myNav;