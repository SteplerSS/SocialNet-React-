import React, { Component } from 'react';

import './App.css';

import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from 'react-router-dom';
import Preloader from "./components/common/preloader/Preloader";



class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/news' render={() => <News />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <Login />} />
                        {/*<Route path='/music' component={Music}/>*/}
                        {/*<Route path='/settings' component={Settings}/>*/}
                    </div>
                </div>
            </BrowserRouter>
        )
    }
};

const mapStateToProps = (state) => ({

    initialized: state.app.initialized


})


export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);



