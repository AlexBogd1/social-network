
import React from 'react'
import style from './ProfileInfo.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FormFieldInput, FormFieldTextarea } from '../../../utils/formControls/FormsControls'
import { UserProfileContactsType, UserProfileType } from "../ProfileContainer"
import { Contact } from './../ProfileInfo/ProfileInfo'
import { count } from 'console';

export type ProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    lookingForAJobDescription: string
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType, { profile: UserProfileType }> & { profile: UserProfileType }> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div><button>save</button></div>
        <div>
            Full name: <Field placeholder="Full Name" name="fullName" validate={[]} component={FormFieldInput} />
        </div>
        <div>
            <div>Looking for a job:</div> 
            <Field name="lookingForAJob" type="checkbox" validate={[]} component={FormFieldInput} />
        </div>
        <div>
           <div>About Me:</div> 
            <Field placeholder='About Me' name="aboutMe"  validate={[]} component={FormFieldTextarea} />
        </div>

        <div>
            <div>My professional skills:</div> <Field placeholder='My professional skills' name="lookingForAJobDescription"  validate={[]} component={FormFieldTextarea} />
        </div>

        <div>
            <b>Contacts</b>: {props.profile.contacts && Object.keys(props.profile.contacts)
                .map(cont => {
                    const a = props.profile?.contacts ? props.profile.contacts[cont as keyof UserProfileContactsType] : ''
                    return <div className={style.contacts}>
                            <b>{cont}: <div><Field placeholder={cont} name={"contacts."+cont} validate={[]} component={FormFieldInput} /></div></b>
                    </div>
                })}
        </div>

    </form>
}

const ProfileDataFormRedux = reduxForm<ProfileFormDataType, { profile: UserProfileType }>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux;