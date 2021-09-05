import React, { Component } from 'react'

class Movie extends Component {
    render() {
        
        return (
            
                <div className="col-md-3">
                    <div className="card">
                        <img src={this.props.movie.image} className=" img-fluid"/>
                        <div className="card-body">
                        <h6 className="card-text">Title: {this.props.movie.title}</h6>
                    </div>
                    </div>
                    
                </div>                
            
        )
    }
}

export default Movie
