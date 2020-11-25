import React from 'react'
import {Spinner,ListGroup,Button} from 'react-bootstrap'
import AddComment from "./AddComment"
class CommentArea extends React.Component{
 
    state= {

        comments: [],
        loading: true,
       
    }
    fetchcommentarea = async ()=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.bookid,{
                
                headers: new Headers({
                   
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzZkZjk4MzViMDAwMTc1ODRlZjkiLCJpYXQiOjE2MDU3OTM1MDQsImV4cCI6MTYwNzAwMzEwNH0.RQ-kMcVlnL1llfLFK4x5Ngs5GVgVMSEdKGZPfujJSbc"

                })
            })
            let comments = await response.json()
            console.log(comments)
            
            
            this.setState({ comments: comments, loading: false })
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
        
    }

    
    componentDidMount =  () => {
      this.fetchcommentarea()
    }
    componentDidUpdate = (previousProps, previousState) => {
        if (previousState.comments !== this.state.comments) {
          this.fetchcommentarea();
        }
    }

      deleteComment = async (commentId)=>{
        try {
           
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+commentId,
                {
                    method: 'Delete',
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzZkZjk4MzViMDAwMTc1ODRlZjkiLCJpYXQiOjE2MDU3OTM1MDQsImV4cCI6MTYwNzAwMzEwNH0.RQ-kMcVlnL1llfLFK4x5Ngs5GVgVMSEdKGZPfujJSbc"

                    })
                })
                    
            }
        catch(e){
            console.log(e)
        }

    }
   
    
    render(){

        return(

            <div className="mb-5">
            <h2>Comments</h2>
            {
                this.state.loading && (
                    <div className="font-bold d-flex justify-content-center">
                        <span>Wait or strive</span>
                        <Spinner animation="border" variant="success" />
                    </div>
                )
            }
           
            <AddComment myid={this.props.bookid }/>
            
            {this.state.comments.map((comment, index) => (
                <ListGroup key={index}>
                    
                    <ListGroup.Item>

                        {comment.comment} 
                        <Button type="submit" onClick={()=>this.deleteComment(comment._id)}>Delete</Button>


                    </ListGroup.Item>
                </ListGroup>
            ))}
        </div>

        )



    }




}

export default CommentArea