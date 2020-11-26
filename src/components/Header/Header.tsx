import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderType) => {
    return (
        <header className={style.header}>
            <img src='https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth-1024x768.png'/>
            <div className={style.loginBlock}>
                {props.isAuth ?props.login : <NavLink to={'/login'} >Login</NavLink>}

            </div>
        </header>
    )
}


export default Header;