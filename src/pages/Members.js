import React, { Component } from 'react';
import {Login, Write, Edit } from './members/index.js'
import Sorry from './Sorry.js'

class Members extends Component {
    constructor(props) {
        super(props)
        this.state = {
        menu: props.match.params.menu,

        userName: '',
        userToken: '',
        isUserAdmin: false
        }
    }

    UNSAFE_componentWillMount(){
        if (!this.state.userName || !this.state.userToken) {
            this.setState({
                ...this.state,
                menu: 'login'
            })
        }
    }
    

    render(){
        switch(this.state.menu){
            case 'login':
                return(
                   <Login />
                )
                break;
            case 'write':
                return(
                    <Write />
                )
                break;
            case 'edit':
                return(
                    <Edit />
                )
                break;
            default:
                return (
                    <Sorry />
                )
                break;
        }
    }
}

export default Members;