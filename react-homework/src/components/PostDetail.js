import React, { Component } from 'react';
import './style.scss';
import { getData, apiUrl } from '../tools';


class PostDetail extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount = async()=> {
        const {id} = this.props.match.params;
        console.log(id);
        const post = await getData(`${apiUrl}/posts/${id}/`);
        this.setState({post});
    }
    

    render() {
        const {post} = this.state;
        console.log(post);
        return (
            <div>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <button onClick={() => this.props.history.goBack()}> BACK </button>
            </div>
        )
    }
}

export default PostDetail ;
