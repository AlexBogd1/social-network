import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {ReduxStoreType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/app-reducer";

type AppComponentType = {
    initialized: boolean
    initializeApp: () => void
}

class App extends React.Component<AppComponentType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }


        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        {/*<Route path='/profile' component={Profile}/>*/}
                        {/*<Route path='/news' component={News}/>*/}
                        {/*<Route path='/music' component={Music}/>*/}
                        {/*<Route path='/settings' component={Settings}/>*/}
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>

                    </div>
                </div>

        );
    }
}

const mapStateToProps = (state:ReduxStoreType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}), withRouter)(App)
