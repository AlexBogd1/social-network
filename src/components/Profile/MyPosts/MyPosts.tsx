import React, {useRef} from "react";
import style from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";


type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {


    let postsElements =
        props.posts.map( p => { return <Post id ={p.id} message={p.message} likesCount={p.likesCount} /> })

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {

        if(newPostElement.current){
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value = '';
        }

    }

    return (

        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref ={newPostElement}>

                    </textarea>
                </div>
                <div>
                    <button onClick = { addPost }>Add post</button>
                </div>

            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;