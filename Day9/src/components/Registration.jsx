import React from 'React';
import { Form, Button } from 'react-bootstrap';

class Registration extends React.Component {

    state = {
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

    submitComment = ()=>{
        e.preventDefault();


    }



	render() {
		return (
			<Form onSubmit={this.submitForm}>
				<Form.Group >
					<Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text"
                     placeholder="Write your name"
                     arial-label="name"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} />
				</Form.Group>
                <Form.Group >
					<Form.Label>Surname</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Write your surname"
                     arial-label="surname"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} /> />
				</Form.Group>
				<Form.Group >

					<Form.Label>Email address</Form.Label>
                    <Form.Control
                     type="email"
                     placeholder="Enter email"
                     arial-label="email"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} /> />
				</Form.Group>

				<Form.Group >
					<Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Password"
                     arial-label="password"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} /> />
				</Form.Group>
                <Form.Group>
					<Form.Label>Year of birth</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Write your birthdate"
                     arial-label="Yearofbirth"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} /> />
				</Form.Group>
                <Form.Group >
					<Form.Label>Street Address</Form.Label>
                    <Form.Control
                     placeholder="xxx this street" 
                    arial-label="streetAdd"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} /> />
				</Form.Group>
                <Form.Group >
					<Form.Label>City</Form.Label>
                    <Form.Control 
                    placeholder="Your city" 
                    arial-label="city"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} /> />
				</Form.Group>
               
                <Form.Group >
                 <Form.Label type="number">Postal Code</Form.Label>
                 <Form.Control 
                    arial-label="postalCode"
                    aria-describedby="basic-addon1"
                    onChange={this.handleCommentText}
                    value={this.state.newComment.comment} />/>
                 </Form.Group>
				
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}
export default Registration;
