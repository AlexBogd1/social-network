import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {usersAPI} from "../../api/api";
import {FormFieldInput} from "../../utils/formControls/FormsControls";
import {maxLengthValidator, required} from "../../utils/validators/validators";

type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
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
            <Field name={'rememberMe'}  type= {"checkbox"} component = {'input'}/> Remember Me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

let LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)



const Login = () => {
    const onSubmit = (formData: FormDataType) => {
     let  {login, password, rememberMe} = {...formData}
        usersAPI.login(login, password, rememberMe).then(res => console.log(res))
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
}
export default Login;