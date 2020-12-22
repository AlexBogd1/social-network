import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialodsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import  {InjectedFormProps, Field, reduxForm} from "redux-form";
import {FormFieldTextarea} from "../../utils/formControls/FormsControls";
import {maxLengthValidator, required} from "../../utils/validators/validators";



export type DialogsType = {
    dialogPage: DialogsPageType
    onSendMessageClick: (message: string) => void
}
export type DialogsFormType = {
    message: string
}

let maxLengthMessage = maxLengthValidator(30)

const Dialogs = (props: DialogsType) => {
    console.log(props);

    let dialogsElements = props.dialogPage.dialogs
        .map(d => {
            return <DialogItem key={d.name+d.id} name={d.name} id={d.id}/>
        })

    let messagesElements = props.dialogPage.messages.map(m => {
        return <Message key={m.id + m.message} id={m.id} message={m.message}/>
    })

    let onSendMessageClick = (formData: DialogsFormType) => {
        props.onSendMessageClick(formData.message)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <DialogsFormReducer onSubmit = {onSendMessageClick}/>
            </div>
        </div>
    )
}

const DialogForm = (props: InjectedFormProps<DialogsFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'} placeholder={'enter message'} validate = {[required,maxLengthMessage]} component = {FormFieldTextarea}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}
const DialogsFormReducer = reduxForm<DialogsFormType>({form: 'dialogsForm'})(DialogForm)

export default Dialogs;