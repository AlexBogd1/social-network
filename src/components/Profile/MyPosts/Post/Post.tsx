import React from "react";
import style from './Post.module.css';


export type PostType = {
    id: number,
    message: string,
    likesCount: number
}


const Post = (props: PostType) => {
    return (
        <div className={style.item}>
            <img src='https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275824-stock-photo-business-man-avatar-in-suit.jpg' />
            {props.message}
            <div>
                {`like ${props.likesCount}`}
            </div>

        </div>

    )
}

export default Post;