import { render } from "@testing-library/react";
import React from "react"
import {Row,Col,Dropdown} from 'react-bootstrap';

import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Horror from '../data/horror.json'

import Scifi from '../data/scifi.json'



class LatestRelease extends React.Component{
    state = {
        genre: Fantasy,
        category:"Select Category"
      }

      
      
    render(){
       
        return(
            <>
               <Dropdown className='ml-3'>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
           {this.state.category}
         </Dropdown.Toggle>
       
         <Dropdown.Menu>
           <Dropdown.Item href="#"onClick={() => this.setState({ genre:Fantasy,category:"Fantasy" })}>Fantasy</Dropdown.Item>
           <Dropdown.Item href="#" onClick={() => this.setState({ genre:History,category:"History" })}>History</Dropdown.Item>
           <Dropdown.Item href="#"onClick={() => this.setState({ genre:Horror,category:"Horror" })}>Horror</Dropdown.Item>
           <Dropdown.Item href="#"onClick={() => this.setState({ genre:Scifi ,category:"Scifi" })}>Scifi</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
       
                   <Row>
                      {(this.state.genre).map((item)=>(
                       <Col xs={12} md={4} lg={2} key = {`Item${item.asin}`}>
                       <img  src={item.img}
                       className ="img-fluid m-2 "
                       
                       style ={{height:'15rem', width:'15rem'}}
       
                       
                       ></img>
                       </Col>
                      
       
                      ))
       
                   }
          
               </Row>
       
               </>
       
       
           
         
               
       
       
           )
    }
   







}

export default LatestRelease