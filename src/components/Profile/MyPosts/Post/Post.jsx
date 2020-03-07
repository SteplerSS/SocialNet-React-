import React from 'react';
import p from './Post.module.css';
import usersmall from '../../../../assets/images/usersmall.jpg';


const Post = (props) => {

    return (
        <div className={p.item}>
            <img src={usersmall}/>
            {props.message}
            <div>
                <span>like</span>{props.likeCount}
            </div>
        </div>
    )
};
export default Post;
