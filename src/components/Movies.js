import React, { Component } from 'react'
import Movie from './Movie'
import Loading from './Loading'


class Movies extends Component {
    render() {
            if(this.props.loading){
               return <Loading/>
            }else{
                return (
                    <div className="container my-2">
                        <div className="row">
                            
                            {this.props.movies.map(movie=>(
                                <Movie movie={movie} key={movie.id}/>
                            ))}
                        </div>
                    </div>
                )
            }
        
            
        }
}

export default Movies
