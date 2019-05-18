/**
 * SLICE
 * cut string or array
 * slice(index, coundRemove)
 */

const Array = ['ahmed', 'khaled', 'said', 'sara'];
console.log(Array.slice(0, 2)); // ['ahmed', 'khaled']

/**
 * REDUX
 * action => connect to reducer and to edit this reducer
 * reducer => javascript function return data
 * state => data of app
 * store === redux container contain state and reducer
 *
 * create store note => 1 reducer in store
 * action contain property type
 */

// create reducer #2
const reducer = (state, action) => {
    if (action.type === "ay_name") {
        return action.payload;
    }
    return state;
}

// create store #1
const store = Redux.createStore(reducer);

// create action #3
const action = {
    type: "ay_name",
    payload: "mohamed"
}

// run store
store.dispatch(action_name),

    // create state #4
    store.getState();