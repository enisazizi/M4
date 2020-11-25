import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'

class AddComment extends React.Component {
    state = {
        comments: {
            comment: '',
            rate: '1',
            elementId:this.props.myid
         
        },
        errMessage: '',
        loading: false
    }

    updateCommentField = (e) => {
        let comments = { ...this.state.comments } // creating a copy of the current state
        let currentId = e.currentTarget.id // 'name', 'phone', etc.

        if (currentId === 'smoking') {
            comments[currentId] = e.currentTarget.checked
        } else {
            comments[currentId] = e.currentTarget.value // e.currentTarget.value is the keystroke
        }
        //reservation['name'] --> reservation.name = 'S'
        //reservation['phone'] --> reservation.phone = '3'
        this.setState({ comments: comments })
    }

    submitComment = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        try {
           
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comments),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzZkZjk4MzViMDAwMTc1ODRlZjkiLCJpYXQiOjE2MDU3OTM1MDQsImV4cCI6MTYwNzAwMzEwNH0.RQ-kMcVlnL1llfLFK4x5Ngs5GVgVMSEdKGZPfujJSbc"

                    })
                })
            if (response.ok) {
                alert('Comment Added')
                this.setState({
                    comments: {
                        comment: '',
                        rate: '',
                        elementId:''
                       
                    },
                    errMessage: '',
                    loading: false,
                })
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState({
                    errMessage: error.message,
                    loading: false,
                })
            }
        } catch (e) {
            console.log(e) // Error
            this.setState({
                errMessage: e.message,
                loading: false,
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.errMessage && (
                        <Alert variant="danger">
                            We encountered a problem with your request
                            {this.state.errMessage}
                        </Alert>
                    )
                }
                {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            Reserving your table, please wait
                            <div className="ml-2">
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    )
                }
                <Form className="w-100 mb-5" onSubmit={this.submitComment}>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="comment">Comment</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    placeholder="Your comment"
                                    value={this.state.comments.comment}
                                    onChange={this.updateCommentField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label htmlFor="rate">
                                   Rate your Book
                            </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="rate"
                                    id="rate"
                                    value={this.state.comments.rate}
                                    onChange={this.updateCommentField}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  
                                </Form.Control>
                            </Form.Group>
                        </Col>
                  
                     
                    </Row>

                   
                    <Button type="submit">Add Comment</Button>
                </Form>
            </div>
        )
    }
}

export default AddComment