import React, {useRef} from "react";
import style from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    posts: Array<PostType>
    messageForNewPost: string
    addPost: () => void
    onChangeText: (text: string) => void
}

const MyPosts = (props: MyPostsType) => {
    console.log(props)
    let postsElements =
        props.posts.map(p => {
            return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
        })

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        props.addPost();
    }

    const onChangeText = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.onChangeText(text);
        }
    }

    return (

        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.messageForNewPost} onChange={onChangeText}/>
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