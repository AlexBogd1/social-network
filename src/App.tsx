import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userID?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
