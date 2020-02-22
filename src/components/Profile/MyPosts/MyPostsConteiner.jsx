
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';

import { connect } from "react-redux";



// const MyPostsConteiner = (props) => {



// return  <StoreContext.Consumer> 
//     {      (store) => {
//             let state = store.getState();

//             let addPosts = () => {
//                 store.dispatch(addPostActionCreator());
//             };

//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//             };

//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPosts={addPosts}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText} />
//             }
//         }
//         </StoreContext.Consumer>
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPosts: () => {
            dispatch(addPostActionCreator());
        }
    }
};
const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
