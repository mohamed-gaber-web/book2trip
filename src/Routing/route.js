import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import SinglePost from './../components/SinglePost/SinglePost';

class Routing extends Component {

    render() {
        return (
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/single-post/:id' component={SinglePost} />
            </div>
        )
    }
}

export default Routing;
