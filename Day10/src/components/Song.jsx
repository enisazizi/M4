import React from 'react'

class Song extends React.Component {


    render(){
        return(
            <img
            src={this.props.obj.album.cover}
            className="img-fluid"
            alt=""
            style={{ width: "11rem", height: "10rem" }}
         
          />
        )
    }
}
export default Song