import profileReducer from "./profile-reducer";
import React from 'react';
import {addPostActionCreator, deletePost} from "./profile-reducer";


    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It is my first post!', likesCount: 0 },
            { id: 3, message: 'It is my ', likesCount: 35 }],
             
    };



test('length of posts should be incremented', () => {
    // 1.test data

    let action = addPostActionCreator("IT-Kamasutra SteplerSS");

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect( newState.posts.length).toBe(4);
});
  
test('message of new posts should be correct', () => {
    // 1.test data

    let action = addPostActionCreator("IT-Kamasutra SteplerSS");

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

   
    expect( newState.posts[3].message).toBe("IT-Kamasutra SteplerSS");

  });
  
test('after deleting lenght of message should be decrement', () => {
    // 1.test data

    let action = deletePost(1);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

   
    expect( newState.posts.length).toBe(2);

  });
  


