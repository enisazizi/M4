import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Alert, Container } from "react-bootstrap";

class Menu extends React.Component {
  state = {
    dishes:dishes
  }

  render(){
    return(

      <Container>
     
     { (this.state.dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />))}
      
       {this.state.dishes.length === 0 &&
      (<Alert variant="info">No Dishes</Alert>)
       }
    </Container>
    )
  }
  
 

}
export default Menu;
