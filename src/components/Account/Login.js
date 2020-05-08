import React, { Component } from 'react';
import { login } from './UserFunctions';
import { Link, withRouter} from 'react-router-dom';
import { Button, Form, Icon, Message, Segment, Container } from 'semantic-ui-react';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render() {
        return (
        <Container  style={{ width: '450px', marginBottom: '450px', marginTop: '100px' }}>
            <Message style={{borderRadius:'0px'}}
                attached
                icon="privacy"
                header="С возвращением!"
                content="Войдите с помощью почты и пароля"
                color="white"
            />
                <Form className='attached fluid segment' noValidate onSubmit={this.onSubmit}>
                    <Form.Input
                        fluid
                        icon="envelope"
                        iconPosition="left"
                        label="Почта"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        label="Пароль"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    <Button
                        icon="sign in"
                        type="submit"
                        color="instagram"
                        content="Войти"
                    />
            </Form>
        </Container>    
        ) 
    }
} 

export default Login