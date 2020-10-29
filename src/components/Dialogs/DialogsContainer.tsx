import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem, {DialogItemType} from "./DialogItem/DialodsItem";
import Message, {MessageType} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import {AddPostActionType, UpdateNewPostActionType} from "../../redux/profile-reducer";
import {
    SendMessageActionType,
    sendMessageCreator,
    updateNewMessageBodyCreator,
    UpdateNewMessageBodyType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



type DialogsType = {
    dialogPage: DialogsPageType
    dispatch: (action:
                   AddPostActionType | UpdateNewPostActionType|
                   UpdateNewMessageBodyType|SendMessageActionType) => void
}

const DialogsContainer = (props: DialogsType) => {



    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
       props.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs dialogPage={props.dialogPage} onSendMessageClick ={onSendMessageClick} onNewMessageChange={onNewMessageChange}/>
}

export default DialogsContainer;