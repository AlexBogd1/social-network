import React, {InputHTMLAttributes} from 'react'
import {WrappedFieldProps} from "redux-form";
import style from './FormsControls.module.css'


// type TextareaFormFieldPropsType = {
//     input: InputHTMLAttributes<HTMLTextAreaElement>
//     placeholder: string
//     meta: {
//         touched: boolean,
//         error: string
//     }
// }
//
// type InputFormFieldPropsType = {
//     input: InputHTMLAttributes<HTMLInputElement>
//     type: string
//     meta: {
//         touched: boolean,
//         error: string
//     }
// }

export const FormFieldTextarea: React.FC<WrappedFieldProps> = ({ input,  meta: { touched, error, warning} }) => {
    return <div className={style.formControl+ ' '+ ((touched && error) ? style.error: ' ')}>
        <textarea  {...input} />
        {touched && error &&<span>{error}</span>}
    </div>
}


const FormFieldInput: React.FC<WrappedFieldProps> = ({ input,  meta: { touched, error} }) => {
    return <div>
        <input {...input}></input>
        {touched && error && <span>{error}</span>}
    </div>
}

