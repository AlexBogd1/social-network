import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormFieldInput} from "../../utils/formControls/FormsControls";
import {maxLengthValidator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

type LoginCompType = {
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
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
}
export default connect(null, {login})(Login);