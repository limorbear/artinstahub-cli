import React from 'react'
import { Divider, Container } from 'semantic-ui-react'

const Footer = () => {

    return (
        <div>
        <Divider inverted section />
        <Container textAlign='center' style={{ 'fontSize': 'small' }}>
            <p>2019학년도 홍익대학교 미술대학 학생회 학예학술국
            </p>
            <p>개별 작품 이미지 및 설명에 대한 저작권은 해당 작가에게 있습니다.</p>
        </Container>
            
        </div>
    )

}


export default Footer