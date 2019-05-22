import React, { Component } from 'react';
import './Posts.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Posts extends Component {

    handleDeletePost = (id) => {
        return axios.delete('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            const allPosts = this.props.posts;
            console.log(allPosts);
            allPosts.splice(0, res)
            console.log('Post Deleted ' + id);
            console.log(allPosts);
            // this.props.history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="post">
                    <div className='u-image'>
                        <img src={require('../../assets/images/user.png')} alt="userpost" className="img-fluid" />
                    </div>
                    <div className="left">
                        <p className='username'> Username </p>
                        <p className="unvi"> unvirsety Of Alberta </p>
                    </div>
                    <h3> {this.props.title}  </h3>
                    <img src={require('../../assets/images/post.png')} alt="imagepost" />
                    <p className='content'>
                        {this.props.content}
                    </p>
                    <ul className='list-unstyled'>
                        <li> <i className="fas fa-comments"></i> Comment </li>
                        <li> <i className="fas fa-comments"></i> Like </li>
                    </ul>

                    <NavLink to={'/single-post/' + this.props.id}> Read More <i class="fas fa-plus-square"></i> </NavLink>
                    <div className="clearfix"></div>
                    <button className="btn btn-danger" onClick={() => { this.handleDeletePost(this.props.id) }}> <i class="fas fa-trash-alt"></i> Delete </button>
                </div>
            </div>
        );
    }
}

export default Posts;