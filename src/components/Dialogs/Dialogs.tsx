import React from "react";
import style from './Dialogs.module.css'
import DialogItem, {DialogItemType} from "./DialogItem/DialodsItem";
import Message, {MessageType} from "./Message/Message";






export type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>

}


const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs
        .map(d => {
            return <DialogItem name={d.name} id={d.id}/>
        })

    let messagesElements = props.messages
        .map(m => {
            return <Message id={m.id} message={m.message}/>
        })


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;