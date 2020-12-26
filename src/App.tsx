import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {setAuthenticationUserData} from "./redux/auth-reducer";
import {withAuthRedirect} from "./hoc/withAuthRedirect";

type AppComponentType = {
    setAuthenticationUserData: () => void
}

class App extends React.Component<AppComponentType> {

    componentDidMount() {
        this.props.setAuthenticationUserData();
    }

    render() {
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

export default compose<React.ComponentType>(connect(null, {setAuthenticationUserData}), withRouter)(App)
