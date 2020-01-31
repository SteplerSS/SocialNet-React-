import React from "react";
import s from './News.module.css'
import {NavLink} from "react-router-dom";

const News = (props) => {
    return (
        <div className={s.news}>
            <div className={s.news + ' ' + s.active}>
                <div>
                    <div className={s.newTitle}>
                    <NavLink to="/new/1">News1</NavLink>
                    </div>
                    <div>
                    <div className={s.new}>NEW</div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default News;