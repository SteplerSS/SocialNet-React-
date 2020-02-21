import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsConteiner = (props) => {



return  <StoreContext.Consumer> 
    {      (store) => {
            let state = store.getState();

            let addPosts = () => {
                store.dispatch(addPostActionCreator());
            };

            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            };

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPosts={addPosts}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
};

export default MyPostsConteiner;
