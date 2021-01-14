import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../images/images.png'
import {NavLink} from 'react-router-dom';

export type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

const Paginator = (props: PaginatorType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p =>
                <span
                    key={p}
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick = {(e) => {  props.onPageChanged(p); }}
                >
                    {p}
                </span>)}
        </div>


       

}

export default Paginator;
