import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {


    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    },[props.status])


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        let s = e.target.value
        setStatus(s)
    }



        return (
            <div>
                {
                    !editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
                    </div>}
                {
                    editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={deactivateEditMode}
                               value={status}
                               onChange={onStatusChange}
                        />
                    </div>
                }
            </div>
        )




}

export default ProfileStatusWithHooks;