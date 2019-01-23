import React, { Component } from 'react';
import NavBar from 'components/NavBar.js';
import ArtistCard from 'components/ArtistCard.js';
import Footer from 'components/Footer.js';
import { Container, Card } from 'semantic-ui-react';

const artists = [
  {
    id: 1,
    name: '임영택',
    working_image: 'http://photo.jtbc.joins.com/news/2017/02/13/20170213160123696.jpg',
    tags: ['#예술학과', '#도자기', '#1998년생'],
    description: '달항아리를 좋아한다.',
    portfolio: 'Instagram: @0tak2_98',
    portfolio_url: 'https://www.instagram.com/0tak2_98/'
  },

  {
    id: 2,
    name: '임일택',
    working_image: 'http://www.tovy.co.kr/data/goods/81/8136/12_1_1469248559.jpg',
    tags: ['#예술학과', '#도자기', '#1999년생'],
    description: '매병을 좋아한다.',
    portfolio: 'Instagram: @0tak2_98',
    portfolio_url: 'https://www.instagram.com/0tak2_98/'
  },

  {
    id:3,
    name: '임이택',
    working_image: 'http://file.samsungfoundation.org/leeum/leeum_upload/shop/p1(0).jpg',
    tags: ['#예술학과', '#도자기', '#1997년생'],
    description: '백자는 다 좋아한다.',
    portfolio: 'Instagram: @0tak2_98',
    portfolio_url: 'https://www.instagram.com/0tak2_98/'
  },

  {
    id: 4,
    name: '임삼택',
    working_image: 'http://farm.resources.ebs.co.kr/edrb/thumb/201201/VOD_20120111_00406_THM.jpg',
    tags: ['#예술학과', '#도자기', '#1997년생'],
    description: '도자 공예를 주로 함.',
    portfolio: 'Instagram: @0tak2_98',
    portfolio_url: 'https://www.instagram.com/0tak2_98/'
  }
];

class Home extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />

        <Container style={{ marginTop: '7em' }}>
          <Card.Group>
          {artists.map((artist) => {
              return <ArtistCard name={artist.name}
                working_image={artist.working_image}
                tags={artist.tags}
                description={artist.description}
                portfolio={artist.portfolio}
                portfolio_url={artist.portfolio_url}
                key={artist.id} />
            })}
           </Card.Group>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Home;