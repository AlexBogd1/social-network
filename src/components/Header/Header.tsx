import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import img from './../../../public/logo512.png'

type HeaderType = {
    isAuth: boolean
    login: string | null
    setAuthenticationUserData: () => void
}

const Header = (props: HeaderType) => {

    return (
        <header className={style.header}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png'}/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink onClick={()=> props.setAuthenticationUserData()} to={'/login'} >Login</NavLink>}
                {console.log(props.isAuth)}
            </div>
        </header>
    )
}


export default Header;