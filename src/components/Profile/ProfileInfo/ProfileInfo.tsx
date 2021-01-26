import React, { useState } from "react";
import style from './ProfileInfo.module.css';
import { UserProfileContactsType, UserProfileType } from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from '../../../images/images.png'
import ProfileDataForm from "./ProfileDataForm";


type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
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

    const contacts = props.profile.contacts ? props.profile.contacts : null;

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
                {!editMode ? <ProfileData profile ={props.profile} isOwner={props.isOwner} goToEditMode = {() => {setEditMode(true)}}/> : <ProfileDataForm profile={props.profile}  /> }
                
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



const Contact = ({ contactTitle, contactValue }: { contactTitle: string, contactValue: string | null }) => {
    return <div className={style.contacts}><b>{contactTitle}</b>: {contactValue} </div>
}



export default ProfileInfo;