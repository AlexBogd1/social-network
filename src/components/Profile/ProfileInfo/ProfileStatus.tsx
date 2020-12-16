import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (newStatus: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,

        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        let s = e.target.value
        this.setState({
            status: s
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>}
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        )

    }


}

export default ProfileStatus;