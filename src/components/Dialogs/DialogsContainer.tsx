import React from "react";
import {DialogsPageType} from "../../redux/state";
import {AddPostActionType, UpdateNewPostActionType} from "../../redux/profile-reducer";
import {SendMessageActionType, sendMessageCreator, updateNewMessageBodyCreator, UpdateNewMessageBodyType} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

type DialogsType = {
    dialogPage: DialogsPageType
    dispatch: (action:
                   AddPostActionType | UpdateNewPostActionType |
                   UpdateNewMessageBodyType | SendMessageActionType) => void
}


const mapStateToProps = (store: DialogsType) =>{ return { dialogPage: store.dialogPage }}


const mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdateNewPostActionType |UpdateNewMessageBodyType | SendMessageActionType) => void) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
    }


}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;