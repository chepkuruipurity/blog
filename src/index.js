import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Posts from './components/Posts'
import Post from './components/Post'

const postData=window.__POST__
class App extends Component {
componentDidMount(){
    console.log('POST==' + JSON.stringify(postData))
}
    render (){
        let userInterface=null
        if(postData==null){
            userInterface=<Posts/>
        } else{
            userInterface= <Post post={postData}/>
        }
        return (
            <div>{userInterface}</div>
        )
    }
    
}
ReactDOM.hydrate(<App/>, document.getElementById('root'))