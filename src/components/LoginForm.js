import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends Component {
  state = {
    userName: '',
    userPassword: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    this.props.onCreate(this.state) //부모한테 전달함
  }
  render() {
    return(
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div,
          body > div > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              로그인이 필요한 서비스입니다
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='아이디'
                  value={this.state.userName}
                  onChange={this.handleChange}
                  name="userName" />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='패스워드'
                  type='password'
                  value={this.state.userPassword}
                  onChange={this.handleChange}
                  name="userPassword"
                />

                <Button color='teal' fluid size='large'>
                  로그인
                </Button>
              </Segment>
            </Form>
            <Message>
              처음 방문하셨다면? <Link to='/register'>계정 등록하기</Link>
            </Message>
          </Grid.Column>
        </Grid>
          {this.state.userName}
          {this.state.userPassword}
      </div>
    )
  }
}