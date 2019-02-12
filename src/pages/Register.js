import React from 'react';
import NavBar from 'components/NavBar.js';
import Footer from 'components/Footer.js';
import { Container, Header, Icon } from 'semantic-ui-react';

const Register = () => {
    return (
        <div>
            <NavBar />
        
            <Container style={{ marginTop: '7em' }}>

                <Header as='h2' icon>
                    <Icon name='unlink' />
                    회원 가입
                    <Header.Subheader>회원 가입</Header.Subheader>
                </Header>

            </Container>

            <Footer />
        </div>
    );
};

export default Register;