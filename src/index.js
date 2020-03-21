import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Post from './components/Post'
import Posts from './components/Posts'

const postData=window.__POST__
class App extends Component {
componentDidMount(){
    console.log('POST==' + JSON.stringify(postData))
}
    render (){
        let userInterface=null
        if(postData==null){
            userInterface=<Post/>
        } else{
            userInterface= <Posts/>
        }
        return (
            <div>{userInterface}</div>
        )
    }
    
}
ReactDOM.hydrate(<App/>, document.getElementById('root'))