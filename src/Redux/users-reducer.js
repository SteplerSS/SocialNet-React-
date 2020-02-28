const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: false, fullName: 'Sergey', status: 'I am bass', location: { city: 'Chicago', country: 'USA' } },
        // { id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',followed: true, fullName: 'Katy', status: 'I am not marred', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',followed: false, fullName: 'Alecya', status: 'I am a good girl', location: { city: 'Kiev', country: 'Ukraine' } },
    ],
};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:

            return {
                ...state,

                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:

            return {
                ...state,

                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

            case SET_USERS:{
                return { ...state, users: [ ...state.users, ...action.users ]}
            }

        default:
            return state;
    };
};

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer