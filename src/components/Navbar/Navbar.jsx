import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = "/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href= '#s'>News</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href = '#s'>Music</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href = '#s'>Settings</a>
            </div>
        </nav>
     )
};
export default Navbar;
