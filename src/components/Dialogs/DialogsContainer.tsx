import React from "react";
import {DialogsPageType} from "../../redux/state";
import {AddPostActionType, UpdateNewPostActionType} from "../../redux/profile-reducer";
import {SendMessageActionType, sendMessageCreator, updateNewMessageBodyCreator, UpdateNewMessageBodyType} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";

const mapStateToProps = (store: ReduxStoreType) =>{ return { dialogPage: store.dialogPage }}


const mapDispatchToProps = (dispatch: (action: UpdateNewMessageBodyType | SendMessageActionType) => void) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
    }

}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;