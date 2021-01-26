import React, { useState } from "react";
import style from './ProfileInfo.module.css';
import { UserProfileContactsType, UserProfileType } from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from '../../../images/images.png'
import ProfileDataForm, {ProfileFormDataType} from "./ProfileDataForm";


type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    saveProfile: (profile:UserProfileType) => void
    updateStatus: (newStatus: string) => void
}

const ProfileInfo = (props: ProfileInfoType & { isOwner: boolean, savePhoto: (e: File) => void }) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }

    }
    let profile = '';

    if (props.profile.photos) {
        profile = props.profile.photos.large;
    }

    const onSubmit = (formData: ProfileFormDataType) => {
        let {fullName, lookingForAJob, aboutMe, lookingForAJobDescription} = {...formData}
        props.saveProfile(formData)
    }

    return (
        <div>

            <div className={style.profile}>
                <img
                    src={profile || UserPhoto}
                    alt={'profile'}
                    className={style.avatar}
                />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                {!editMode ? <ProfileData profile ={props.profile} isOwner={props.isOwner} goToEditMode = {() => {setEditMode(true)}}/> : <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}  /> }
                
            </div>
        </div>
    )
}



const ProfileData = ({profile, isOwner, goToEditMode}: {profile: UserProfileType} & {isOwner: boolean, goToEditMode: () => void} ) => {
    return  <div>
        {isOwner && <div><button onClick ={goToEditMode} >edit</button></div>}
    <div>
        Full name: {profile.fullName}
    </div>
    <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    <div>
        About Me: {profile.aboutMe}
    </div>
    {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
    }
    <div>
        <b>Contacts</b>: {profile.contacts && Object.keys(profile.contacts)
            .map(cont => {
                const a = profile?.contacts ? profile.contacts[cont as keyof UserProfileContactsType] : ''
                return <Contact contactTitle={cont} contactValue={a} />
            })}
    </div>

</div>
}

export const Contact = ({ contactTitle, contactValue }: { contactTitle: string, contactValue: string | null }) => {
    return <div className={style.contacts}><b>{contactTitle}</b>: {contactValue} </div>
}



export default ProfileInfo;