import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// // axios interceptors [ config globaly ]
// axios.interceptors.request.use(request => {
//     console.log(request)
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

// // Create Url Global
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";


