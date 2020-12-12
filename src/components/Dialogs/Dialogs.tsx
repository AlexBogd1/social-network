import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import { Redirect } from "react-router-dom";


export type DialogsType = {
    dialogPage: DialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

const Dialogs = (props: DialogsType) => {
    console.log(props);

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