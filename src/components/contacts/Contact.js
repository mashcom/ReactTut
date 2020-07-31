import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = async (id, dispatch) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
          type: "DELETE_CONTACT",
          payload: id,
        })
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body">
              <h6 className="font-weight-bold h6">
                {name}
                <button
                  onClick={this.onShowClick}
                  className="btn float-right font-weight-bold btn-primary btn-xs"
                >
                  Toggle
                </button>
                <button
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="btn float-right font-weight-bold btn-danger btn-xs mx-1"
                >
                  Delete
                </button>
                <Link
                  to={`/contact/edit/${id}`}
                  className="btn float-right font-weight-bold btn-secondary btn-xs mx-1"
                >
                  Edit
                </Link>
              </h6>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
