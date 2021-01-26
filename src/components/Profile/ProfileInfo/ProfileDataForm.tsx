import { profile } from 'console'
import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FormFieldInput, FormFieldTextarea } from '../../../utils/formControls/FormsControls'
import { UserProfileContactsType, UserProfileType } from "../ProfileContainer"
import { Contact } from './../ProfileInfo/ProfileInfo'

type ProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    lookingForAJobDescription: string
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType, { profile: UserProfileType }> & { profile: UserProfileType }> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div><button onClick={() => { }} >save</button></div>
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
                    return <Contact contactTitle={cont} contactValue={a} />
                })}
        </div>

    </form>
}

const ProfileDataFormRedux = reduxForm<ProfileFormDataType, { profile: UserProfileType }>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux;