
import Navbar from './Navbar'
import Search from './Search'
import Movies from './Movies'
import Alert from './Alert'
import axios from 'axios'

import React, { Component } from 'react'


 class App extends Component {
     constructor(props){
            super(props);
            this.searchMovie=this.searchMovie.bind(this)
            this.state={
                movies:[],
                loading: false,
                alert:[]
        }
     }

     searchMovie(keyword){
         this.setState({loading:true})
         axios.get(`https://imdb-api.com/API/Search/k_2hco2jzn/${keyword}`)
            .then(res=>{
                console.log(res.data.results);
                if(res.data.results.length >0){
                    this.setState({
                        movies: res.data.results,
                        loading: false,
                        alert:[]
                    })
                }else{
                    this.setState({
                        alert:{msg:"Movie Not Found",type:"danger"},
                        loading:false,
                        movies:[]
                    })
                }
            })
     }
    render() {
        return (
            <>
                <Navbar/>
                <Search  searchMovie={this.searchMovie}/>
                <Alert alert={this.state.alert} />
                <Movies loading={this.state.loading} movies={this.state.movies} />
                
            </>
        )
    }
}

export default App



