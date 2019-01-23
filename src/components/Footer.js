import React from 'react'
import { Divider, Container } from 'semantic-ui-react'

const Footer = () => {

    return (
        <div>
        <Divider inverted section />
        <Container textAlign='center' style={{ 'fontSize': 'small' }}>
            <p>Project 'Art-Insta-Hub'
            <br />0.1 Demo</p>
            <p>coded by Young Taek, Lim</p>
        </Container>
            
        </div>
    )

}


export default Footer