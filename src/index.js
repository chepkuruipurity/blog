import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Post from './components/Post'

class App extends Component {

    render (){
        return (
            <Post />
        )
    }
    
}
ReactDOM.hydrate(<App/>, document.getElementById('root'))