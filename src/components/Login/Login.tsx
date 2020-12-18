import React from 'react'
import   {InjectedFormProps, Field, reduxForm} from "redux-form";
import {profileAPI, usersAPI} from "../../api/api";

type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component = {'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component = {'input'}/>
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