import React, {useRef} from "react";
import style from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import {
    addPostActionCreator,
    AddPostActionType,
    UpdateNewPostActionType,
    updateNewPostTextActionCreator
} from "../../../redux/state";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}




const MyPosts = (props: MyPostsType) => {


    let postsElements =
        props.posts.map(p => {
            return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
        })

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeText = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (

        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChangeText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;