import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  Icon,
  Input
} from 'semantic-ui-react'

export default class NavBar extends Component {

    state = {
        activeItem: ''
    }

    UNSAFE_componentWillMount(){
        this.setState({ activeItem: window.location.pathname });
    }

    render() {
        const activeItem = this.state.activeItem;
    
        return (
            <div>
            <Menu fixed='top'>
                <Container>
                    <Menu.Item
                        as={ Link } to='/'
                        header
                        active={activeItem === '/'}>
                            <Icon name='address book' size='big' style={{ marginRight: '1.0em' }} />
                                홍익미대 예술장부 (2019)
                    </Menu.Item>
        
                    <Menu.Item as={ Link } to='/members/write'
                        active={activeItem === '/write'}>등록</Menu.Item>
        
                    <Menu.Item as={ Link } to='/members/edit'
                        active={activeItem === '/edit'}>수정</Menu.Item>
                    <Menu.Item as={ Link } to='/about'
                        active={activeItem === '/about'}>
                            <Icon name='help' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Input icon='search' placeholder='검색...' />
                    </Menu.Item>
                </Container>
            </Menu>
          </div>
        )
      }
}
