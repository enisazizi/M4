import React from 'react'
import {Col, Form,Row} from 'react-bootstrap'
class ReservationForm extends React.Component{

//   constructor(props){
//       super(props)
//       this.state ={

//       }    
//   }
    state = {
        Reservation:{
            name:'',
            phone:'',
            numberOfPersons:1,
            smoking:false,
            dataTime:'',
            specialRequest:''

        }
    }
  const updateReservationField = (e)=>{

        let reservation = {...this.state.reservation}
        let currentId = e.currentTarget.id

        reservation[currentId]= e.currentTarget.value
        this.setState({reservation:reservation})

    }
    render(){
        return(

            <Form className="w-100" onSubmit={this.submitReservation}>

            <Row>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    id="name"
                    placeholde="Your name"
                    required
                    value={this.state.Reservation.name}
                    // onChange={(e)=> this.setState({Reservation.name = e.currentTarget.value})}
                    onChange ={this.updateReservationField}
                    />

                  
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group>
                <Form.Label htmlFor="phone">Name</Form.Label>
                <Form.Control 
                type="text"
                name="phone"
                id="name"
                placeholde="Your phone"
                required
                value={this.state.Reservation.phone}
                // onChange={(e)=> this.setState({Reservation.name = e.currentTarget.value})}
                onChange ={this.updateReservationField}
                />

                
              
            </Form.Group>
        </Col>
        <Col>
            <Form.Group>
            <Col md={6}>
                        <Form.Group>
                            <Form.Label htmlFor="numberOfPersons">
                                How many people?
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="numberOfPersons"
                                id="numberOfPersons"
                                value={this.state.reservation.numberOfPersons}
                                onChange={this.updateReservationField}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
              

            
            </Form.Group>
        </Col>

            </Row>

            </Form>
            

        )
    }
}

export default ReservationForm