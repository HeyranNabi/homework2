import React, { Component } from 'react';
import './style.scss';

 class AddPost extends Component {
     state={
         title:'',
         post:[]
     }

   
    render() {
        const { title,post }=this.state;
        return (
            <div className="add-post">
                <form className="form">
                <label className="title">{title.title}</label>
                <input type="text"/>

                <label>Text</label>
                <textarea rows="10" cols="30">{post.body}</textarea>

                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPost;