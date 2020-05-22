import React from 'react';

import LoginHeader from "./LoginHeader"
import { connect } from "react-redux";
import { logout } from "../../Redux/auth-reducer";



class LoginHeaderContainer extends React.Component {

    render() {
        return (
            <div>
                <LoginHeader {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { logout })(LoginHeaderContainer);
