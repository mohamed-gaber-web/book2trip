import React, { Component } from 'react';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import Banners from '../Banners/Banners';
import Posts from '../Posts/Posts';
import axios from 'axios';
import NewPost from './../newPost/NewPost';

class Home extends Component {
    state = {
        posts: []
    }
    // Get Posts Frpm Api
    componentDidMount() {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const postsSlice = response.data.slice(0, 4);
            const updatePost = postsSlice.map(post => {
                return {
                    ...post
                }
            })
            this.setState({
                posts: updatePost
            })
        }).catch(err => {
            console.log(err)
        })
    }



    render() {
        const posts = this.state.posts.map((post, index) => {
            return (
                <Posts
                    title={post.title}
                    content={post.body}
                    key={post.id}
                    id={post.id}
                    posts={this.state.posts}
                />
            );
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-6">
                            <NewPost posts={this.state.posts} />
                            {posts}
                        </div>
                        <div className="col-md-3">
                            <Banners />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;