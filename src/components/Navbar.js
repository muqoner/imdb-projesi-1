import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <i className={this.props.icon}></i>
                        {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps={
    icon:"fab fa-imdb fa-lg",
    title:"  Imdb Film Search"
}


export default Navbar
