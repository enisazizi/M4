import React from 'react';
import { Container } from 'react-bootstrap';
import MyModal from './MyModal'

import {withRouter} from 'react-router-dom'
class ShowDetails extends React.Component{
   
   
    
    render(){
        return(

            <Container>
                <h3>R u working</h3>
            <MyModal></MyModal>
         
            </Container>

        )
    }
}
export default withRouter (ShowDetails) 