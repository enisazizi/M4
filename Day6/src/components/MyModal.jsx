import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Comment from "./Comment";
import {withRouter} from 'react-router-dom'

function MyModal(props) {

  
  return (
    <div
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
          <Container>
            <Row>
              <Col sm={6}>
                <img
                  src={props.poster}
                  alt={props.movie}
                  style={{ height: "20rem", width: "12rem" }}
                ></img>
              </Col>
              <Col sm={6}>
                <p>
                  <strong>Title: </strong> {props.moviename}
                </p>
                <p>
                  <strong>Year: </strong> {props.movieyear}
                </p>
                <p>
                  <strong>Type: </strong> {props.movietype}
                </p>
              </Col>
            </Row>
            <Comment movieid={props.movie} />
          </Container>
     
      
     
    </div>
  );
}
export default withRouter (MyModal)