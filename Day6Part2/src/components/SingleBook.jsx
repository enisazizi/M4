import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from './CommentArea'

class SingleBook extends React.Component {
  state = {
    selected: false,
    myid:this.props.obj.asin
  
  };

  

  handleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true});
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <div>
    {  this.state.selected&&(
      
      <div>
        <CommentArea bookid={this.props.obj.asin} bookimg={this.props.obj.img}/>
        
        </div>
      )}
      <Card onClick={() => this.handleSelected()}>
        <Card.Img
          variant="top"
          src={this.props.obj.img}
          className="img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body style={{ backgroundColor: this.state.color }}
          
        
        >
          <Card.Title className="text-truncate">
            {this.props.obj.title}
          </Card.Title>
          <Card.Text>{this.props.obj.category}</Card.Text>
          <br />
          <Card.Text className="text-warning">{this.props.obj.price}</Card.Text>
        </Card.Body>
     
      </Card>
      </div>
    );
  }
}

export default SingleBook;