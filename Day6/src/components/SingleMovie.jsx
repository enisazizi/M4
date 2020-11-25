import React, { Component } from "react";
import MyModal from "./MyModal";
import {withRouter} from 'react-router-dom'
import ShowDetails from "./ShowDetails";


 class SingleMovie extends Component {

  render() {
    return (
      <>
        <img
          src={this.props.obj.Poster}
          className="img-fluid"
          alt=""
          style={{ width: "11rem", height: "10rem" }}
          onClick={() => this.props.history.push('/details/'+this.props.obj.imdbID)}
        />

<ShowDetails
             movie={this.props.obj.imdbID}
              poster={this.props.obj.Poster}
             moviename={this.props.obj.Title}
             movieyear={this.props.obj.Year}
             movietype={this.props.obj.Type}
             
            
          
        />
      </>
    );
  }
}

export default withRouter (SingleMovie)
