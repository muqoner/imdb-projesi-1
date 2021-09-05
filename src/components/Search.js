import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={
            keyword:""
        }
    }
    onChange(e){
        this.setState({
            keyword: e.target.value.trim()
        })
    }
    onSubmit(e){
        e.preventDefault()
        this.props.searchMovie(this.state.keyword)
        this.setState({
            keyword:""
        })

    }
    render() {
        return (
            <div className="container my-2">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input value={this.state.keyword} onChange={this.onChange} className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className="btn  btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search
