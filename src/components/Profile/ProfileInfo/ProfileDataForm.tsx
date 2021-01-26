import React from 'react'
import { UserProfileContactsType, UserProfileType } from "../ProfileContainer"



const ProfileDataForm = ({profile}: {profile: UserProfileType }) => {
    return  <div>
{/* 
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
    </div> */}

</div>
}

export default ProfileDataForm;