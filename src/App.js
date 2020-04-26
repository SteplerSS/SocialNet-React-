import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {BrowserRouter, HashRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from 'react-router-dom';
import Preloader from "./components/common/preloader/Preloader";
import store from "./Redux/redux-store";
import { Provider } from 'react-redux';

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer  = React.lazy(() => import('./components/Profile/ProfileContainer'));

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));




class App extends Component {
    catchAllUnhandleedErrors = (reason, promise) => {
        alert("Some error occured");
        //console.log(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhendledrejection", this.catchAllUnhandleedErrors);
    };
    componentWillUnmount() {
        window.removeEventListener("unhendledrejection", this.catchAllUnhandleedErrors);
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>

                        <Route path='/dialogs' render={() =>{ 
                        return <React.Suspense fallback={<Preloader/> }><DialogsContainer /></React.Suspense>}}/>

                        <Route path='/profile/:userId?' render={() => { 
                        return <React.Suspense fallback={<Preloader/>}><ProfileContainer /></React.Suspense>}}/>
                      
                        <Route path='/news' render={() => <News />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <Login />} />
                        {/*<Route path='/music' component={Music}/>*/}
                        {/*<Route path='/settings' component={Settings}/>*/}
                    </div>
                </div>
            </HashRouter>
        )
    }
};

const mapStateToProps = (state) => ({

    initialized: state.app.initialized


})



let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
