import React from 'react';
import styles from './Paginator.module.css'
import {useState} from 'react'
export type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onPageChanged: (page: number) => void
}

const Paginator: React.FC<PaginatorType> = ({totalUsersCount, pageSize, currentPage,onPageChanged, portionSize=10 }) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div> {portionNumber > 1 &&
        <button onClick = {() => {setPortionNumber(portionNumber - 1)}}>PREV</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map( p =>
                <span
                    key={p}
                    className={currentPage === p ? styles.selectedPage : ''}
                    onClick = {(e) => {  onPageChanged(p); }}
                >
                    {p}
                </span>)}
                
                {portionCount > portionNumber &&
        <button onClick = {() => {
            debugger
            setPortionNumber(portionNumber + 1)
            }}>NEXT</button> }
        </div>
}

export default Paginator;
