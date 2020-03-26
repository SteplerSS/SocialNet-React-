
import { usersAPI } from '../../src/api/api';

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It is my first post!', likesCount: 0 },
        { id: 3, message: 'It is my ', likesCount: 35 }],

    
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 5
            };
            stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

            return stateCopy;


        case SET_STATUS:
            stateCopy = {
                ...state,
               status : action.status
            }

            return stateCopy;


        case SET_USER_PROFILE:
            stateCopy = {
                ...state, profile: action.profile
            }
            return  stateCopy;        
                

        default:
            return state;
    };
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId).then(response => {

       dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {

    usersAPI.getStatus(userId)
    .then(response => {

       dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {

    usersAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode===0)

       dispatch(setStatus(status));
    });
}




export default profileReducer;