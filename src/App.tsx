import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialodsItem";
import {MessageType} from "./components/Dialogs/Message/Message";

type AppType = {
    state: {
        profilePage: {
            posts: Array<PostType>,
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>
            messages: Array<MessageType>
        }
    }
    addPost: (postMessage: string) => void
    updatePostText: (newText: string) => void
}


const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
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
                               addPost={props.addPost}
                               updatePostText = {props.updatePostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
