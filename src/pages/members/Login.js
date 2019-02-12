import React, { Component } from 'react';
import LoginForm from 'components/LoginForm';
import * as services from '../../services/auth';

export default class Login extends Component {
    state = {
        inputUserName: '',
        inputUserPassword: ''
    }

    reqLogin = async (inputUserName, iuputUserPassword) => {
        var res = ''    
        try {
                res = await services.postLogin(inputUserName, iuputUserPassword);
            } catch (error) {
                console.log("오류가 발생했습니다: " + error);
            }
        var data = res.data
        const userName = inputUserName;
        console.log(data, userName);
        }

    handleCreate = (inputAccount) => {
        this.setState({
            inputUserName: inputAccount.userName,
            inputUserPassword: inputAccount.userPassword
        })
        .this.reqLogin(this.state.inputUserName, this.state.inputUserPassword);
    }

    render(){
        return (
            <div>
                <LoginForm onCreate={this.handleCreate} />
            </div>
        );
    }
}