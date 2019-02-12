import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from 'components/NavBar.js';
import Footer from 'components/Footer.js';
import { Container, Header, Icon } from 'semantic-ui-react';

const logged = false;

const Write = () => {
    return (
        <div>
                    {
                        !logged && <Redirect to="/login" />
                    }

                    <NavBar />

                    <Container style={{ marginTop: '7em' }}>

                        <Header as='h2' icon>
                            <Icon name='unlink' />
                            등록
                            <Header.Subheader>등록</Header.Subheader>
                        </Header>

                    </Container>

                    <Footer />
        </div>
    )
    
};

export default Write;