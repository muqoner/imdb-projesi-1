import React, { Component } from 'react'
import loading from './loading.gif'

export class Loading extends Component {
    render() {
        return (
            <div>
               <img src={loading} style={{width:"200px", display:"block",margin:"auto"}} /> 
            </div>
        )
    }
}

export default Loading
