import React, { Component } from 'react';
import { Form, Message, Container, Button, Icon, Image, Item, List, Segment, Input, TextArea } from 'semantic-ui-react';
import { getHotels, addHotel, deleteHotel, updateHotel } from './HotelFunctions';

class NewHotel extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            description: '',
            image: '',
            statistic: '',
            raiting: '',
            lat: '',
            lng: '',
            address: '',
            city_id: '',
            editDisabled: false,
            hotels: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getHotels()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getHotels = () => {
        getHotels().then(data => {
            this.setState(
                {
                    name: '',
                    description: '',
                    image: '',
                    statistic: '',
                    raiting: '',
                    price: '',
                    lat: '',
                    lng: '',
                    address: '',
                    hotels: [...data]
                },

                () => {
                    console.log(this.state.hotels)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addHotel(this.state.name, this.state.description, this.state.image, this.state.statistic, this.state.raiting, this.state.lat, this.state.lng, this.state.address).then(() => {
            this.getHotels()
        })
        this.setState({
            name: '',
            description: '',
            image: '',
            statistic: '',
            raiting: '',
            price: '',
            lat: '',
            lng: '',
            address: '',
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateHotel(this.state.name, this.state.description, this.state.image, this.state.statistic, this.state.raiting, this.state.price, this.state.lat, this.state.lng, this.state.address, this.state.id).then(() => {
            this.getHotels()
        })
        this.setState({
            editDisabled: ''
        })
    }

    onEdit = (hotelsid, e) => {
        e.preventDefault()

        var data = [...this.state.hotels]
        data.forEach((hotels, index) => {
            if (hotels.id === hotelsid) {
                this.setState({
                    id: hotels.id,
                    name: hotels.name,
                    description: hotels.description,
                    image: hotels.image,
                    statistic: hotels.statistic,
                    raiting: hotels.raiting,
                    price: hotels.price,
                    lat: hotels.lat,
                    lng: hotels.lat,
                    address: hotels.address,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteHotel(val)

        var data = [...this.state.hotels]
        data.filter(function(hotels, index) {
            if (hotels.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ hotels: [...data] })
    }

    render() {
        return (
            <Container style={{width:'800px', marginBottom: '100px'}}>
         
            <Message style={{borderRadius:'0px'}}
                attached
                icon="settings"
                header="Додати готель"
                content="Ви можете додати новий готель або відредагувати запис"
               
            />
           
                <Form className='attached fluid segment'style={{ marginBottom: '20px'}} onSubmit={this.onSubmit}>
                
                    <Form.Field
                        control={Input}
                        placeholder="Назва"
                        name="name"
                        type="text"
                        value={this.state.name || ''}
                        onChange={this.onChange.bind(this)}
                      />
                    
                       <Form.Field
                           control={TextArea}
                           name="description"
                           type="text"
                           placeholder="Опис"
                           value={this.state.description || ''}
                           onChange={this.onChange.bind(this)}                     
                        />

                        <Form.Field
                            control={Input}
                            placeholder="Псилання на зображення"
                            name="image"
                            type="text"
                             value={this.state.image || ''}
                            onChange={this.onChange.bind(this)}
                          />

                          <Form.Field
                              control={Input}
                              placeholder="Статистика"
                              name="statistic"
                              type="text"
                              value={this.state.statistic || ''}
                              onChange={this.onChange.bind(this)}
                            />

                            <Form.Field
                                control={Input}
                                placeholder="Рейтінг"
                                name="raiting"
                                type="text"
                                value={this.state.raiting || ''}
                                onChange={this.onChange.bind(this)}
                              />

                              <Form.Field
                                  control={Input}
                                  placeholder="Ціна"
                                  name="price"
                                  type="text"
                                  value={this.state.price || ''}
                                  onChange={this.onChange.bind(this)}
                                />

                              <Form.Field
                                  control={Input}
                                  placeholder="Широта"
                                  name="lat"
                                  type="text"
                                  value={this.state.lat || ''}
                                  onChange={this.onChange.bind(this)}
                                />

                                <Form.Field
                                    control={Input}
                                    placeholder="Довгота"
                                    name="lng"
                                    type="text"
                                    value={this.state.lng || ''}
                                    onChange={this.onChange.bind(this)}
                                  />

                                  <Form.Field
                                      control={Input}
                                      placeholder="Адреса"
                                      name="address"
                                      type="text"
                                      value={this.state.address || ''}
                                      onChange={this.onChange.bind(this)}
                                    />
                    
                    {!this.state.editDisabled ? (
                        <Form.Field
                                control={Button}
                                type="submit"
                                color="instagram"
                                content="Додати"
                                onClick={this.onSubmit.bind(this)}
                            />
                        
                    ) : (
                        ''
                    )}
                    {this.state.editDisabled ? (
                        <Form.Field
                                control={Button}
                                type="submit"
                                color="instagram"
                                content="Оновити"
                                onClick={this.onUpdate.bind(this)}
                            />
                        
                    ) : (
                        ''
                    )}
               
                </Form>   

                <Item.Group divided style={{ maxWidth: '850px'}}>
                     {this.state.hotels.map((hotels, index)=> (
                       <Item key={index}>
                            <Item.Image src={hotels.image}/>
                            <Item.Content>
                                
                                <Item.Header as='a'>{hotels.name}
                                                                    
                                </Item.Header>
                               
                                    <p>{hotels.description}</p>
                                    <Button basic color='blue' floated='right' disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(
                                            this,
                                            hotels.id
                                        )}>
                                          <Icon name='edit' />
                                    </Button> 

                                    <Button basic color='red' floated='right' disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(
                                            this,
                                            hotels.id
                                        )}>
                                          <Icon name='trash' />
                                    </Button> 
                      
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
            </Container>
        )
    }
}


export default NewHotel;