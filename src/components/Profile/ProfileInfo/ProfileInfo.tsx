import React from "react";
import style from './ProfileInfo.module.css';
import {UserProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from '../../../images/images.png'


type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileInfo = (props: ProfileInfoType & {isOwner: boolean, savePhoto: (e: File) => void}) => {

    if (!props.profile) {
        return <Preloader/>
    }
    
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            props.savePhoto(e.target.files[0])
        }
        
    }
    let profile = '';
    
    if(props.profile.photos) {
        profile = props.profile.photos.large;
    }


    
    return (
        <div>

            <div className={style.profile}>
                <img
                    src={profile || UserPhoto}
                    alt={'profile'}
                    className = {style.avatar}
                />
                {!props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <div>
                    About Me: {props.profile?.aboutMe}
                </div>
                <div>
                    My full name: {props.profile?.fullName}
                </div>
                {/* <div>
                    My facebook: {props.profile?.contacts.facebook}<br/>
                    My instagram: {props.profile?.contacts.instagram}
                </div> */}
            </div>
        </div>
    )
}

export default ProfileInfo;