import React from 'react'

import {Alert} from 'react-bootstrap'

const  WarningSign = (props)=>{


    return (
    <Alert  variant="danger">
        {props.title}
   </Alert>



    )

}









export default WarningSign