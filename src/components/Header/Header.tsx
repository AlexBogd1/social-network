import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import img from './../../../public/logo512.png'

type HeaderType = {
    isAuth: boolean
    login: string | null
    setAuthenticationUserData: () => void
    logout: () => void
}

const Header = (props: HeaderType) => {

    return (
        <header className={style.header}>
            <img alt={'header im'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png'}/>
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'} >Login</NavLink>}

            </div>
        </header>
    )
}


export default Header;