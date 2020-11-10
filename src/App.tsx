import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Profile from "./components/Profile/Profile";
import Dialogs, {} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from "./redux/state";
import {AddPostActionType, UpdateNewPostActionType} from "./redux/profile-reducer";
import {SendMessageActionType, UpdateNewMessageBodyType} from "./redux/dialogs-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/redux-store";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";




const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
