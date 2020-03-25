import React, { Component } from 'react'

class Header extends Component {
    render() {
        const {branding} = this.props;
        return (
              <nav className="navbar navbar-expand-md  navbar-light bg-blue shadow-sm"><div className="container"><a href="http://localhost/doc_manager/public" className="navbar-brand font-weight-bold">
                    {branding}
                </a> <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button> <div id="navbarSupportedContent" className="collapse navbar-collapse"><ul className="navbar-nav mr-auto"></ul> <ul className="navbar-nav ml-auto"><li className="nav-item"><a href="http://localhost/doc_manager/public/login" className="nav-link">Login</a></li> <li className="nav-item"><a href="http://localhost/doc_manager/public/register" className="nav-link">Register</a></li></ul></div></div></nav>
           
        )
    }
}

export default Header;
