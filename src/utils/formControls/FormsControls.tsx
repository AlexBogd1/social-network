import React from 'react'
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

//
// export const FormControl: React.FC<WrappedFieldProps & {placeholder: string}> = ({ input, placeholder,  meta: { touched, error, warning} }) => {
//     return <div className={style.formControl+ ' '+ ((touched && error) ? style.error: ' ')}>
//         <textarea placeholder={placeholder}  {...input} />
//         {touched && error &&<span>{error}</span>}
//     </div>
// }





export const FormFieldTextarea: React.FC<WrappedFieldProps & {placeholder: string}> = (props) => {
    const { input, meta, ...restProps } = props
    return <div className={style.formControl+ ' '+ ((meta.touched && meta.error) ? style.error: ' ')}>
        <textarea {...restProps} {...input} />
        {meta.touched && meta.error &&<span>{meta.error}</span>}
    </div>
}



export const FormFieldInput: React.FC<WrappedFieldProps & {placeholder:string, type: string}> = (props) => {
    const { input, meta, ...restProps } = props
    return <div className={style.formControl+ ' '+ ((meta.touched && meta.error) ? style.error: ' ')}>
        <input {...restProps} {...input}></input>
        {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
}

