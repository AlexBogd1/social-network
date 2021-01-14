import React from "react";
import style from './ProfileInfo.module.css';
import {UserProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile)
    return (
        <div>

            <div className={style.profile}>
                <img
                    src={props.profile?.photos.large}
                    alt={'profile'}
                />
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <div>
                    About Me: {props.profile?.aboutMe}
                </div>
                <div>
                    My full name: {props.profile?.fullName}
                </div>
                <div>
                    My facebook: {props.profile?.contacts.facebook}<br/>
                    My instagram: {props.profile?.contacts.instagram}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;