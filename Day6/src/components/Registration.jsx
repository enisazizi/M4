import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Registration extends React.Component {

    state = {
        submitstate:false,
        errorMessage: '',
        formRegister:{
            name:'',
            surname:'',
            email:'',
            password:'',
            yearOfBirth:'',
            streetAddress:'',
            city:'',
            postalCode:'',
            


        }
       
    }


    submitForm= (e)=>{
       
        e.preventDefault();
        

        this.setState({
            formRegister:{
                name:'',
                surname:'',
                email:'',
                password:'',
                yearOfBirth:'',
                streetAddress:'',
                city:'',
                postalCode:'',
            
    
    
            }

        })

    }
  
    handeInput =  (e)=> {
      
        let formRegister = {...this.state.formRegister}
        let currentId = e.currentTarget.id;
 
        formRegister[currentId] = e.currentTarget.value
      
        const value = e.target.value.trim();
        let errMsg = '';
        console.log(value)
        
        switch (currentId) {
            case 'name':
              errMsg = value.length < 6 ? 'name must be 6 char or more' : "" ;
              break;
              case 'surname':
              errMsg = value.length < 6 ? 'surname must be 6 char or more' : '';
             break;
        }
        this.setState({formRegister})
    this.setState({
        
       
        errorMessage: errMsg
      })

        console.log(this.state.errorMessage)
       
        
    }

   


	render() {
		return (
            <Container>
			<Form onSubmit={this.submitForm}>
				<Form.Group >
					<Form.Label>Name</Form.Label>
                    <Form.Control 
                    id="name"
                    type="text"
                    required
                     placeholder="Write your name"
                     arial-label="name"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.name} />
				</Form.Group>
                <Form.Group >
					<Form.Label>Surname</Form.Label>
                    <Form.Control 
                    required
                    type="text" 
                    id="surname"
                    placeholder="Write your surname"
                     arial-label="surname"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.surname} /> 
				</Form.Group>
				<Form.Group >

					<Form.Label>Email address</Form.Label>
                    <Form.Control
                    required
                    id="email"
                     type="email"
                     placeholder="Enter email"
                     arial-label="email"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.email} /> 
				</Form.Group>

				<Form.Group >
					<Form.Label>Password</Form.Label>
                    <Form.Control 
                    required
                    id="password"
                    type="password" 
                    placeholder="Password"
                     arial-label="password"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.password} /> 
				</Form.Group>
                <Form.Group>
					<Form.Label>Year of birth</Form.Label>
                    <Form.Control 
                    required
                    id="yearOfBirth"
                    type="text" 
                    placeholder="Write your birthdate"
                     arial-label="Yearofbirth"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.yearOfBirth} /> 
				</Form.Group>
                <Form.Group >
					<Form.Label>Street Address</Form.Label>
                    <Form.Control
                    required
                    id="streetAddress"
                     placeholder="xxx this street" 
                    arial-label="streetAdd"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.streetAddress} /> 
				</Form.Group>
                <Form.Group >
					<Form.Label>City</Form.Label>
                    <Form.Control 
                    required
                    id="city"
                    placeholder="Your city" 
                    arial-label="city"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.city} />
				</Form.Group>
               
                <Form.Group >
                 <Form.Label type="number">Postal Code</Form.Label>
                 <Form.Control 
                 required
                    id="postalCode"
                    arial-label="postalCode"
                    aria-describedby="basic-addon1"
                    onChange={this.handeInput}
                    value={this.state.formRegister.postalCode} />
                 </Form.Group>
				
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
            <h3 className="text-white">{this.state.errorMessage}</h3>
            </Container>
		);
	}
}
export default Registration;
