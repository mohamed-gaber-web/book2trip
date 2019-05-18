import React, { Component } from 'react';
import './Single.css';
import axios from 'axios';

class SinglePosts extends Component {

    state = {
        id: this.props.match.params.id,
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.state.id).then(response => {
            console.log(response.data)
            this.setState({
                posts: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    handleDeletePost = (id) => {
        return axios.delete('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            console.log('Post Deleted')
            this.props.history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        let postShow;
        if (this.state.posts) {
            postShow = (
                <div className="single-post">
                    <div className='u-image'>
                        <img src={require('../../assets/images/user.png')} alt="userpost" />
                    </div>
                    <div className="left">
                        <p className='username'> Mohmaed </p>
                        <p className="unvi"> unvirsety Of Alberta </p>
                    </div>
                    <h3> {this.state.posts.title}  </h3>
                    <img src={require('../../assets/images/post.png')} alt="imagepost" />
                    <p className='content'>
                        {this.state.posts.body}
                    </p>

                    <button className="btn btn-danger" onClick={() => this.handleDeletePost(this.state.posts.id)}> Delete <i class="fas fa-trash-alt"></i> </button>
                    <div className="clearfix"></div>
                </div>
            )
        } else {
            postShow = (
                <div>
                    <h2> No Post Found </h2>
                </div>
            );
        }
        return (
            <div>
                {postShow}
            </div>
        );
    }
}

export default SinglePosts;