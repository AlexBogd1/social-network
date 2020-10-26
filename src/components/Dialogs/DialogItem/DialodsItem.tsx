import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";



export type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink activeClassName = {style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;