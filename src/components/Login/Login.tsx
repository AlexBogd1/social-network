import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormFieldInput} from "../../utils/formControls/FormsControls";
import {maxLengthValidator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom';
import style from './../../utils/formControls/FormsControls.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

type LoginCompType = {
    captcha: string | null
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captcha: string| null) => void
}

type CaptchaType = {
    captchaUrl: string | null
}

let maxLengthLoginInput = maxLengthValidator(20);

const LoginForm: React.FC<InjectedFormProps<FormDataType,CaptchaType> & CaptchaType> = (props) => {
    
   return <form onSubmit={props.handleSubmit}>
        <div> 
            <Field placeholder={'Login'} type={'text'} name={'login'} validate={[required, maxLengthLoginInput]}
                   component={FormFieldInput}/>
        </div>
        <div>
            <Field placeholder={'Password'} type={'password'} name={'password'} validate={[required]}
                   component={FormFieldInput}/>
        </div>
        <div>
            <Field name={'rememberMe'} type={"checkbox"} component={FormFieldInput}/> Remember Me
        </div>
        
        {props.captchaUrl && <img src ={props.captchaUrl} alt='captcha' />}
        {props.captchaUrl && <Field placeholder={'text'} type={'text'} name={'captcha'} component={FormFieldInput}/>}

        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>
        }

        <div>
            <button>Login</button>
        </div>
    </form>
}

let LoginReduxForm = reduxForm<FormDataType, CaptchaType>({form: "login"})(LoginForm)


const Login: React.FC<LoginCompType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        let {login, password, rememberMe, captcha} = {...formData}
        props.login(login, password, rememberMe, captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={props.captcha} onSubmit={onSubmit}/>
    </div> 
}

const mapStateToProps = (store: ReduxStoreType) => ({
    captcha: store.auth.captchaUrl,
    isAuth: store.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);