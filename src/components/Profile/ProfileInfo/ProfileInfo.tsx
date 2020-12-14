import React from "react";
import style from './ProfileInfo.module.css';
import {UserProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus'

type ProfileInfoType = {
    profile: UserProfileType | null
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={style.profile}>
                <img
                    src={props.profile?.photos.large}/>
                <ProfileStatus status={'isidslsl'}/>
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