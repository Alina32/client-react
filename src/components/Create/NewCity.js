import React, { Component } from 'react';
import ImageUploader from 'react-image-uploader';
import { Form, Message, Container, Button, Icon, Image, Item, List, Segment, Input, TextArea } from 'semantic-ui-react';
import { getCities, addCities, deleteCities, updateCities } from './CityFunctions';

class NewCity extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            description: '',
            image: '',
            editDisabled: false,
            cities: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getCities()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getCities = () => {
        getCities().then(data => {
            this.setState(
                {
                    name: '',
                    description: '',
                    image: '',
                    cities: [...data]
                },

                () => {
                    console.log(this.state.cities)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addCities(this.state.name, this.state.description, this.state.image).then(() => {
            this.getCities()
        })
        this.setState({
            name: '',
            description: '',
            image: '',
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateCities(this.state.name, this.state.description, this.state.image, this.state.id).then(() => {
            this.getCities()
        })
        this.setState({
            editDisabled: ''
        })
    }

    onEdit = (citiesid, e) => {
        e.preventDefault()

        var data = [...this.state.cities]
        data.forEach((cities, index) => {
            if (cities.id === citiesid) {
                this.setState({
                    id: cities.id,
                    name: cities.name,
                    description: cities.description,
                    image: cities.image,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteCities(val)

        var data = [...this.state.cities]
        data.filter(function(cities, index) {
            if (cities.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ cities: [...data] })
    }

    render() {
        return (
        <Container style={{width:'800px', marginBottom: '100px'}}>
         
            <Message style={{borderRadius:'0px'}}
                attached
                icon="settings"
                header="Додати місто"
                content="Ви можете додати нове місто або відредагувати запис"
               
            />
           
                <Form className='attached fluid segment' style={{ marginBottom: '20px'}} onSubmit={this.onSubmit}>
                
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
                	        placeholder="Посилання на зображення"
                	        name="image"
                	        type="text"
                	        value={this.state.image || ''}
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

                <Item.Group divided style={{ maxWidth: '850px' }}>
                     {this.state.cities.map((cities, index)=> (
                       <Item key={index}>
                            <Item.Image src={cities.image}/>
                            <Item.Content>
                	            
                	            <Item.Header as='a'>{cities.name}
                	            	                	            
                	            </Item.Header>
                	           
                	            	<p>{cities.description}</p>
                	            	<Button basic color='blue' floated='right' disabled={this.state.editDisabled}
                	            	    onClick={this.onEdit.bind(
                	            	        this,
                	            	        cities.id
                	            	    )}>
                	            	      <Icon name='edit' />
                	            	</Button> 

                	            	<Button basic color='red' floated='right' disabled={this.state.editDisabled}
                	            	    onClick={this.onDelete.bind(
                	            	        this,
                	            	        cities.id
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

export default NewCity
