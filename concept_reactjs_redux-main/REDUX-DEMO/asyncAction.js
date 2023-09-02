const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')



// // ****state****
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// // ##########Action##########

// // ******* action Type ******
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// // ******* Action creater *****
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserssFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// // ########## reducer function ##########
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
            ...state,
            loading: true
        }
        
        case FETCH_USERS_SUCCESS:
            return {
            loading: true,
            users: action.payload,
            error: ''
        }

        case FETCH_USERS_FAILURE:
            return {
            loading: flase,
            users: [],
            error: action.payload
        }
    }
}

// async action creater
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://ajsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message is the error description
            dispatch(fetchUserssFailure(error.message))
        })
    }
}



// // ########## redux store ##########
const store = createStore(reducer, applyMiddleware(thunkMiddleware))


// // ******* subscribe *******
store.subscribe(() => { console.log(store.getState())})

// // ******* despatch action *******
store.dispatch(fetchUsers())