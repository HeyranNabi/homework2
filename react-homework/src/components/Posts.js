import React, { Component } from 'react';
import './style.scss';
import { getData, apiUrl } from "../tools";
import { withRouter } from "react-router";


const classes = {
    postContainer: {
        border: '1px solid #000'
    }
}

class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount =async()=>{
        const getData =await  fetch(`${apiUrl}/posts/`);
        const posts = await getData.json();
        this.setState({posts});
    }


    goToDetail = postId => {
        this.props.history.push(`/post/${postId}`);
    }
    

    render() {

        const {posts}=this.state;
        
        return (
            <div>
           

                {posts.map( post => (
                    <div key={post.id} style={classes.postContainer}>
                        <p>title: {post.title}</p> 
                        <p>body: {post.body}</p> 
                        <button onClick={() => this.goToDetail(post.id)}> more.. </button>
                      
                    </div>
                ))}
            </div>
        )
    }
}

export default withRouter(Posts);
