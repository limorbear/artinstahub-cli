import React from 'react';
import NavBar from 'components/NavBar.js';
import Footer from 'components/Footer.js';
import { Container, Header, Icon } from 'semantic-ui-react';

const Sorry = () => {
    return (
        <div>
            <NavBar />

            <Container style={{ marginTop: '7em' }} textAlign='center'>

                <Header as='h2' icon>
                    <Icon name='unlink' />
                    So Sorry...!
                    <Header.Subheader><br />조회, 검색하신 내용에 해당하는 데이터를 찾을 수 없거나 잘못된 접근입니다. <br />
                        예기치 않은 문제가 계속해서 반복될 경우 관리자에게 문의해주세요.</Header.Subheader>
                </Header>

            </Container>

            <Footer />
        </div>
    );
};

export default Sorry;