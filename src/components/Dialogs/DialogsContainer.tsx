import React from "react";
import {
    SendMessageActionType,
    sendMessageCreator,
    updateNewMessageBodyCreator,
    UpdateNewMessageBodyType
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs, {DialogsType} from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {withArrowFuncAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (store: ReduxStoreType) =>{
     return { 
         dialogPage: store.dialogPage,
         isAuth: store.auth.isAuth
        }
    }


const mapDispatchToProps = (dispatch: (action: UpdateNewMessageBodyType | SendMessageActionType) => void) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
    }

}

let AuthRedirectComponent = withArrowFuncAuthRedirect<DialogsType>(Dialogs);

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;