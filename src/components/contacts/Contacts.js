import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../../context';

class Contacts extends Component {
   
    componentDidMount(){
        fetch('http://localhost/ww5/wp-json/wp/v2/posts')
        .then(response=>response.json())
        .then(json=> console.log(json))
    }
    
    render() {
        
        return (
            <Consumer>
                {
                    value=>{
                        const {contacts} = value;
                        return <React.Fragment>
                        {contacts.map(contact=>(
                            <Contact 
                                key = {contact.id}
                                contact={contact}
                             />
                        ))}
                    </React.Fragment>
                    }
                }
            </Consumer>
        )
    }
}

export default Contacts;