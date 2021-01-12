import React from "react";
import style from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthValidator, required} from "../../../utils/validators/validators";
import {FormFieldTextarea} from "../../../utils/formControls/FormsControls";


export type MyPostsType = {
    posts: Array<PostType>
    addPost: (post: string) => void
}

export type MyPostFormType = {
    post: string
}

let maxLengthVal = maxLengthValidator(15)

const MyPosts = React.memo((props: MyPostsType) => {
    console.log("render")
    let postsElements =
        props.posts.map(p => {
            return <Post key={p.id + p.message} id={p.id} message={p.message} likesCount={p.likesCount}/>
        })

    let addPost = (propsForm: MyPostFormType) => {
        props.addPost(propsForm.post);
    }


    return (

        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <MyPostFormRedux onSubmit = {addPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
})



const MyPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name = {'post'}
                   placeholder = 'enter message'
                   component = {FormFieldTextarea}
                   validate = {[required,maxLengthVal]}

            />
        </div>
        <div>
            <button>Add post</button>
        </div>

    </form>
}

const MyPostFormRedux = reduxForm<MyPostFormType>({form: 'myPostForm'})(MyPostForm)

export default MyPosts;