import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state = {
        name:'',
        email:'',
        phone:'',
        errors:{

        }
    }

    onChange = e => this.setState({
        [e.target.name]:e.target.value
    })

    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        const {name,email,phone} = this.state;

        if(name ===''){
            this.setState({
                errors:{name:"Name is required"}
            });
            return;
        }

        if(email ===''){
            this.setState({
                errors:{email:"Email is required"}
            });
            return;
        }

        if(phone ===''){
            this.setState({
                errors:{phone:"Phone is required"}
            });
            return;
        }
        
        //remember to install uuid
        const newContact = {
            id:4,name,email,phone
        }
        dispatch({
            type:'ADD_CONTACT',
            payload:newContact
        });

        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{

            }
        })

        
    }
    render() {
        const {name,email,phone,errors} = this.state;
        
        return (
            <Consumer>
            {
                value=>{
                    const {dispatch}  = value;
                    return (
                        <div className="card mb-3">
                <div className="card-header font-weight-bold">Add Contact</div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit.bind(this,dispatch)}>
                        <TextInputGroup  
                                name="name"
                                type="text"
                                label="Name"
                               placeholder="Enter name"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}/>

                        <TextInputGroup  
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter email"
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}/>      
                       
                       <TextInputGroup 
                                name="phone" 
                                type="text"
                                label="Phone"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}/>

                        
                        <input type="submit" className="btn btn-primary font-weight-bold btn-block p-3 font-weight-old" value="Add Contact"/>
                    </form>
                </div>
            </div>
                    )
                }
            }
        </Consumer>
            
        )
    }
}


export default AddContact;
