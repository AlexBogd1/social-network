import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { ReduxStoreType } from "./redux/redux-store";
import Preloader from "./components/common/Preloader";
import { initializeApp } from "./redux/app-reducer";

type AppComponentType = {
    initialized: boolean
    initializeApp: () => void
}

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component<AppComponentType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }


        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavBar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Suspense fallback={<Preloader />}>
                        <DialogsContainer />
                    </Suspense>} />
                    <Route path="/profile/:userID?" render={() => <Suspense fallback={<Preloader />}>
                        <ProfileContainer />
                    </Suspense>} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: ReduxStoreType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(connect(mapStateToProps, { initializeApp }), withRouter)(App)
