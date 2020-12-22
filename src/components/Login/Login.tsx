import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormFieldInput} from "../../utils/formControls/FormsControls";
import {maxLengthValidator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import { Redirect } from 'react-router-dom';

type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

type LoginCompType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

let maxLengthLoginInput = maxLengthValidator(20);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} type = {'text'} name={'login'} validate = {[required,maxLengthLoginInput]} component = {FormFieldInput}/>
        </div>
        <div>
            <Field placeholder={'Password'} type = {'password'} name={'password'} validate = {[required]} component = {FormFieldInput}/>
        </div>
        <div>
            <Field name={'rememberMe'}  type= {"checkbox"} component = {FormFieldInput}/> Remember Me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

let LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)



const Login: React.FC<LoginCompType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
     let  {login, password, rememberMe} = {...formData}
        props.login(login, password, rememberMe)
    }
    if(props.isAuth) {
       return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
}

const mapStateToProps = (store: ReduxStoreType) => ({
    isAuth: store.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);