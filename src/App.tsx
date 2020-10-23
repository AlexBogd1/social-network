import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType, AddPostActionType, UpdateNewPostActionType} from "./redux/state";

type AppType = {
    state: StateType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


const App = (props: AppType) => {

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
                           render={() => <Dialogs
                               dialogs={props.state.dialogsPage.dialogs}
                               messages={props.state.dialogsPage.messages}

                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
