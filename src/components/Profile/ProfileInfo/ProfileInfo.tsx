import React from "react";
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img className={style.img}
                     src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'/>
            </div>
            <div className={style.profile}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;