import React, { Component } from 'react';
import { register } from './UserFunctions';
import { Button, Form, Icon, Message, Segment, Container } from 'semantic-ui-react';


class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            name: this.state.first_name + ' ' + this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            
            <Container  style={{ width: '450px', marginBottom: '500px', marginTop: '80px' }}>
                <Message style={{borderRadius:'0px'}}
                    attached
                    icon="settings"
                    header="Добро пожаловать!"
                    content="Создайте новый аккаунт"
                    color="white"
                />
                    <Form className='attached fluid segment' noValidate onSubmit={this.onSubmit}>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            label="Имя"
                            placeholder="First Name"
                            name="first_name"
                            type="text"
                            value={this.state.first_name}
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            label="Фамилия"
                            placeholder="Last Name"
                            name="last_name"
                            type="text"
                            value={this.state.last_name}
                            onChange={this.onChange}
                        />
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
                            content="Зарегистрироваться"
                        />
                </Form>
            </Container>    
        )
    }
}

export default Register