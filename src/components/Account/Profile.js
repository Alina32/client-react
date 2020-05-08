import React, { Component } from 'react';
import { getProfile } from './UserFunctions';
import { Button, Card, Image } from 'semantic-ui-react';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                name: res.user.name,
                email: res.user.email
            })
        })
    }

    render() {
        return (
               <Card style={{borderRadius:'0px'}}>
                 <Card.Content>
                   <Image
                     floated='left'
                     size='mini'
                     src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                   />
                   <Card.Header>{this.state.name}</Card.Header>
                   <Card.Meta>{this.state.email}</Card.Meta>
                   
                 </Card.Content>
               </Card>
        )
    }
}

export default Profile