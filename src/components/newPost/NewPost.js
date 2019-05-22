import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import './NewPost.css';

class NewPost extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ body: '', title: 'the title test' }}
                    validate={values => {
                        let errors = {};
                        if (!values.body) {
                            errors.body = 'This Field Is Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        return axios.post('https://jsonplaceholder.typicode.com/posts', values).then(res => {
                            const allPosts = this.props.posts;
                            console.log(allPosts)
                            allPosts.splice(0, 0, values)
                            console.log(res.data)
                            console.log(allPosts)
                        }).catch(err => {
                            console.log(err)
                        })

                    }}
                >
                    {({ isSubmitting, dirty }) => (
                        <div className="form-post">
                            <h3> <i class="fas fa-edit"></i> New Post </h3>
                            <Form>
                                <Field type="text" className="form-control" name="body"
                                    placeholder="Share With Experience With Us ..." />
                                <hr />
                                <ErrorMessage name="body" component="div" className="alert alert-danger" />
                                <button type="submit" disabled={isSubmitting}> Go </button>
                            </Form>

                        </div>
                    )}
                </Formik>
            </div>
        )
    }

}

export default NewPost;