import React from 'react';
import NavBar from 'components/NavBar.js';
import Footer from 'components/Footer.js';
import { Container, Header, Icon } from 'semantic-ui-react';

const Edit = () => {
    return (
        <div>
            <NavBar />

            <Container style={{ marginTop: '7em' }}>

                <Header as='h2' icon>
                    <Icon name='unlink' />
                    수정
                    <Header.Subheader>수정</Header.Subheader>
                </Header>

            </Container>

            <Footer />
        </div>
    );
};

export default Edit;