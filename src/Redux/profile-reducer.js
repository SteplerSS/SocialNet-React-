import {stopSubmit} from 'redux-form';
import { usersAPI } from '../../src/api/api';

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        ],


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
                status: action.status
            }

            return stateCopy;


        case SET_USER_PROFILE:
            stateCopy = {
                ...state, profile: action.profile
            }
            return stateCopy;

        case DELETE_POST:
            stateCopy = {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
            return stateCopy;

        case SAVE_PHOTO_SUCCESS:
            stateCopy = {
                ...state, profile: { ...state.profile, photos: action.photos }
            }
            return stateCopy;

        default:
            return state;
    };
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {

    const response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));

}
export const getStatus = (userId) => async (dispatch) => {

    let response = await usersAPI.getStatus(userId);

    dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {

    let response = await usersAPI.updateStatus(status);

    if (response.data.resultCode === 0)

        dispatch(setStatus(status));

}

export const savePhoto = (file) => async (dispatch) => {

    let response = await usersAPI.savePhoto(file);

    if (response.data.resultCode === 0)

        dispatch(savePhotoSuccess(response.data.data.photos));

}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;

    let response = await usersAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {

           dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }

}





export default profileReducer;