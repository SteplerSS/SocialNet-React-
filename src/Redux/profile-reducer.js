
import { usersAPI } from '../../src/api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It is my first post!', likesCount: 0 },
        { id: 3, message: 'It is my ', likesCount: 35 }],

    newPostText: 'SteplerSS',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            };
            stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

            return stateCopy;


        case UPDATE_NEW_POST_TEXT:
            stateCopy = {
                ...state,
                newPostText: action.newText
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

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId).then(response => {

       dispatch(setUserProfile(response.data));
    });
}


export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;