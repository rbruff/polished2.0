import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import title from "../images/title.jpg";
import { Redirect, Link } from 'react-router-dom';
import API from "../utils/API";
import Signup from "../pages/Signup";


const style = {
  color: "red"
}


class LoginForm extends Component {
  state = {
    isLoggedIn: false,
    email: "",
    password: "",
    username: "",
    error:""
  }

  componentDidMount() {
    API.loginCheck()
      .then(res => {
        if (!res.data) {
          this.setState({
            isLoggedIn: false
          })
        } else {
          this.setState({
            isLoggedIn: true
          })
        }
      })
  };

  componentDidUpdate() {
    if (this.state.isLoggedIn !== this.props.isLoggedIn) {
      this.setState({
        isLoggedIn: this.props.isLoggedIn
      })
    }
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  };

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    console.log(this.state.username, this.state.password);
    API
      .login({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        if (!res.data.error) {
          this.setState({ success: true, error: "" })
          this.props.handleAuth(true, res.data);
        } else {
          throw new Error(res.data.error.message);
        }
      })

      .catch(err => {
        console.log(err)
        this.setState({
          error: err
        })
      });
  }


  render() {
    console.log("hi");
    if (this.props.isLoggedIn) {
      return <Redirect to="/collection" />
    }

    return (
      <div className='login-form' >
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' name="username" onChange={this.handleInputChange} value={this.state.username} iconPosition='left' placeholder='E-mail address' />
                {this.state.error ? (
                  <span style={style}>User does not exist.</span>
                ) : ""}
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
                {/*this.state.error ? (
                  <span style={style}>Incorrect Password.</span>
                ) : ""*/}

                <Button color='teal' fluid size='large' onClick={this.login}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New User?
              <Link to="/signup"> Sign Up!</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
};

export default LoginForm;