import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';



let Users = ({ currentPage, pageSize, onPageChanged, totalItemsCount, users, ...props }) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />
                )


            }
        </div>

    </div>
}


export default Users;
