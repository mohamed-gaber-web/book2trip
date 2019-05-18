import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import './NewPost.css';

const NewPost = () => (
    <div>
        <Formik
            initialValues={{ post: '' }}
            validate={values => {
                let errors = {};
                if (!values.post) {
                    errors.post = 'This Field Is Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                return axios.post('https://jsonplaceholder.typicode.com/posts', values.post).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }}
        >
            {({ isSubmitting, dirty }) => (
                <div className="form-post">
                    <h3> <i class="fas fa-edit"></i> New Post </h3>
                    <Form>
                        <Field type="text" className="form-control" name="post" placeholder="Share With Experience With Us ..." />
                        <hr />
                        <ErrorMessage name="post" component="div" className="alert alert-danger" />
                        <button type="submit" disabled={isSubmitting}> Go </button>
                    </Form>

                </div>
            )}
        </Formik>
    </div>
);

export default NewPost;