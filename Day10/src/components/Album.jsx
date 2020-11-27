import React from 'react'
import './Album.css'
import SideNavbar from './SideNavbar'

class  Album extends React.Component{
   
    state={
        finalalbum:[],
        albums:[],
        myalbum1:[],
    }

    mySearchFetch = async ()=>{
          
      try{
        let response= await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
              "method": "GET",
              "headers": {
                  "x-rapidapi-key": "c608fc777fmshd55587c64c83d78p1ebebcjsn20918a48db47",
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
              }
          })
              let somedata = await response.json()
             
              let albums = await somedata.data[0]
              let mysong = await somedata.data
             
              this.setState({albums})
              this.setState({mysong})
        }
          
          catch (error) {
              console.log(error);
            }
    }
    myAlbumFetch = async()=>{
        try{
           
            let response= await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/119606", {
              "method": "GET",
              "headers": {
                  "x-rapidapi-key": "c608fc777fmshd55587c64c83d78p1ebebcjsn20918a48db47",
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
              }
          })
              let myalbum = await response.json()
             
            let myalbum1 = await myalbum.tracks.data
        
            this.setState({myalbum1})
              let finalalbum = await myalbum.artist
              this.setState({finalalbum})
            
           
          }catch(error){
             console.log(error)
          }
    }
    componentDidMount = async()=>{
      this.myAlbumFetch();
      this.mySearchFetch();
    }
    
    

    render(){
      
        return(
           <>
         
           <SideNavbar />
            <div className="page-content">
     
            <div className="album-page">
            
              <div className="row album">
                <div className="col-12 col-md-5 album-overview">
                  <div className="img-album">
                    <img
                      src={this.state.finalalbum.picture}
                      alt=""
                      width="250px"
                      height="250px"
                    />
                  </div>
                  <div className="title-album">
                    <h4>{this.state.finalalbum.name}</h4>
                    <p>{this.state.albums.title_short}</p>
                  </div>
                  <input type="button" value="Play" />
                  <div className="album-details">
                    <p>1974 - 16 songs</p>
                  </div>
                  <div className="album-options">
                    <span className="like">
                      <i className="far fa-heart"></i>
                      <i className="fas fa-heart"></i>
                    </span>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div className="col-12 col-md-7 album-tracks">
                  <ul className="album-track-list">
                    {this.state.myalbum1.map((song)=>{
                        <li className="album-track">
                        <div className="title">
                        <i className="fas fa-music"></i>
                        <div className="title-artist">
                            <div className="title-song">
                            <span><h6></h6></span>
                            <span><h6></h6></span>
                            </div>
                            <p>{song.data}</p>
                        </div>
                        </div>
                        <div className="length">
                        <p></p>
                        </div>
                        </li>

                    })}
                        

                
                   
                  </ul>
                </div>
              </div>
              </div>
              </div>
            </>  
        )
    }
}
export default Album