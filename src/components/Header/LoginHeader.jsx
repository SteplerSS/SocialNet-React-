import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';


const LoginHeader = (props) => {

    return (
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>
                    <div>{props.login}</div>
                    <div>
                        ------------
                    </div>
                    <div><button onClick={props.logout}>log out</button></div>
                </div>
                : <NavLink to={'/login'}>LOGIN</NavLink>}
        </div>
    );

}


export default LoginHeader;

