import React, { Component} from 'react'


class Post extends Component {
    constructor(){
        super()
        this.state = {
            recentPosts: []
        }
    }
    componentDidMount(){
        console.log('Component did mount');
        fetch('/api/post')
        .then( response=> {
            return response.json()

        })
        .then(payload=>{
          
            if (payload.confirmation != 'success'){
                throw new Error(' Something went wrong.');
                return
            }
            
         const posts = payload.data;
         console.log('POSTS=' + JSON.stringify(posts));
         this.setState({
             recentPosts: posts
         })
        })
        .catch(err=> {
            console.log('Error:'+ err.message);
        })
    }

    render (){
        return (
            <div> 
                <h1> Recent posts</h1>
                <ul> 
                    {
                        this.state.recentPosts.map(post=>{
                            return <li key={post.id}>{post.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    
}
export default Post
