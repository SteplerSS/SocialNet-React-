import React from 'react';
import p from './Profile.module.css'


const Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                 <img/>
            </div>
            <div>
                 ava + discription
            </div>
            <div>
                     py post
               <div>
                     New post
               </div>
               <div className={p.item}>
                   <div className={p.item}>
                           post1
                   </div>
                   <div className={p.profile}>
                           post2
                   </div>
               </div>
               <div>
                   Main content
               </div>
             </div>
        </div>
   )
};
export default Profile;
