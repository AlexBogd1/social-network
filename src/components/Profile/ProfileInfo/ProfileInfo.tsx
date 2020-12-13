import React from "react";
import style from './ProfileInfo.module.css';
import { UserProfileType } from "../ProfileContainer";
import Preloader from "../../common/Preloader";



type ProfileInfoType = {
    profile:  UserProfileType | null
}

const ProfileInfo = (props:ProfileInfoType) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div >
            {/*<div>*/}
            {/*    <img className={style.img}*/}
            {/*         src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'/>*/}
            {/*</div>*/}
            <div className={style.profile}>
                <img
                     src={props.profile?.photos.large}/>
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