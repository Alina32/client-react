import React, { Component } from 'react';
import { Button, Header, Modal, Form, Icon, Message, Segment, Container } from 'semantic-ui-react';
import { getBooking, addBooking } from './BookingFunctions';


class Booking extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            modalOpen: false,
            booking: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    componentDidMount() {
        this.getBooking()
    }

    getBooking = () => {
        getBooking().then(data => {
            this.setState(
                {
                    name: '',
                    email: '',
                    phone: '',
                    booking: [...data]
                },

                () => {
                    console.log(this.state.booking)
                }
            )
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = e => {
        e.preventDefault()
        addBooking(this.state.name, this.state.email, this.state.phone).then(() => {
            this.getBooking()
        })
        this.setState({
            name: '',
            email: '',
            phone: '',
        })
    } 

    render () {
        return (
            
            <Container  style={{ width: '450px', marginBottom: '500px', marginTop: '80px' }}>
                <Message style={{borderRadius:'0px'}}
                    attached
                    icon="check"
                    header="Гарний вибір!"
                    content="Вкажіть інформацію для бронювання"
                    color="white"
                />
                    <Form className='attached fluid segment' onSubmit={this.onSubmit}>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            label="Имя"
                            placeholder="Name"
                            name="name"
                            type="text"
                            value={this.state.name || ''}
                            onChange={this.onChange.bind(this)}
                        />
                       
                        <Form.Input
                            fluid
                            icon="envelope"
                            iconPosition="left"
                            label="Почта"
                            placeholder="Email"
                            name="email"onClick={this.handleClose}
                            type="email"
                            value={this.state.email || ''}
                            onChange={this.onChange.bind(this)}
                        />
                        <Form.Input
                            fluid
                            icon="phone"
                            iconPosition="left"
                            label="Телефон"
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={this.state.phone || ''}
                            onChange={this.onChange.bind(this)}
                        />
                        
                        <Modal
                            trigger={<Button
                            icon="sign in"
                            type="submit"
                            color="instagram"
                            content="Підтвердити"
                            onClick={this.onSubmit.bind(this)}
                            onClick={this.handleOpen}/>}
                            open={this.state.modalOpen}
                            onClose={this.handleClose}
                            size='small'
                              >
                                <Header icon='check' content='Бронювання пройшло успішно' />
                                <Modal.Content>
                                  <h4>Дякуємо за Ваш вибір!</h4>
                                  <p>Наш адміністратор зв'яжеться з Вами у найближчий час.</p>
                                </Modal.Content>
                                <Modal.Actions>
                                  <Button color='green' onClick={this.handleClose} inverted>
                                   Ok
                                  </Button>
                                </Modal.Actions>
                              </Modal>
                </Form>


            </Container>    
        )
    }
}

export default Booking;