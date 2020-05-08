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
       /* const data = new FormData() 
            data.append('file', this.state.image)*/
        
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

    onChangeHandler=event=>{
       this.setState({
         image: event.target.files[0]

       })
       console.log(event.target.files[0]);
     }

    onEdit = (citiesid, e) => {
        e.preventDefault()

        let data = [...this.state.cities]
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

        let data = [...this.state.cities]
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
        <Container style={{width:'800px'}}>
         
            <Message style={{borderRadius:'0px'}}
                attached
                icon="settings"
                header="Добавить город"
                content="Вы можете добавить новый город или отредактировать запись"
                color="white"
            />
            <Segment style={{borderRadius:'0px'}}>
                <Form className='attached fluid container' onSubmit={this.onSubmit}>
                
                	<Form.Field
                		control={Input}
                	    placeholder="Название"
                	    name="name"
                	    type="text"
                	    value={this.state.name || ''}
                	    onChange={this.onChange.bind(this)}
                	  />
                   	
                	   <Form.Field
                	   	   control={TextArea}
                	       name="description"
                	       type="text"
                	       placeholder="Описание"
                	       value={this.state.description || ''}
                	       onChange={this.onChange.bind(this)}             	       
                	    />

                	    <Form.Field
                	    	control={Input}
                	        placeholder="Ссылка изображения"
                	        name="image"
                	        type="file"
                	        value=''
                	        onChange={this.onChangeHandler.bind(this)}
                	      />

                    
                    {!this.state.editDisabled ? (
                    	<Form.Field
			                	control={Button}
			      			    type="submit"
			      			    color="instagram"
			      			    content="Добавить"
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
			      			    content="Обновить"
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
                                   
                  </Segment>
            </Container>
        )
    }
}

export default NewCity
