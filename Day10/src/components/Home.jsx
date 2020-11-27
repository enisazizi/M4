import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideNavbar from "./SideNavbar"
import Song from "./Song"
class Home extends React.Component{

    state={
        albums:[],
    }
   
    componentDidMount =async ()=>{

        


      try{
      let response= await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c608fc777fmshd55587c64c83d78p1ebebcjsn20918a48db47",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
            let somedata = await response.json()
            let albums = await somedata.data
            console.log(albums)
            this.setState({albums})
      }
        
        catch (error) {
            console.log(error);
          }
    }


    render(){

        return(
               <Container>
                   <SideNavbar/>
                   <Row style={{marginLeft: '120px' }}>
                   {this.state.albums.map((song) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${song.id}`}
                className="mb-5 px-1"
              >
                <Song obj={song}></Song>
              </Col>
            ))}
                   </Row>
               </Container>
        )
    }
}
export default Home