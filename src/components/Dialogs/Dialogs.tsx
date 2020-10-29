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



type DialogsType = {
    dialogPage: DialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs
        .map(d => {
            return <DialogItem name={d.name} id={d.id}/>
        })

    let messagesElements = props.dialogPage.messages.map(m => {
        return <Message id={m.id} message={m.message}/>
    })
    let newMessageBody = props.dialogPage.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.target.value;
       props.onNewMessageChange(body)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'>

                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;