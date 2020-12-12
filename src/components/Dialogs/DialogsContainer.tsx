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
import {withArrowFuncAuthRedirect, withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (store: ReduxStoreType) =>{
     return { 
         dialogPage: store.dialogPage,

        }
    }


const mapDispatchToProps = (dispatch: (action: UpdateNewMessageBodyType | SendMessageActionType) => void) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
    }

}

let AuthRedirectComponent = withAuthRedirect<DialogsType>(Dialogs);

const mapStateToPropsForRedirect = (store: ReduxStoreType) =>{
    return {
        isAuth: store.auth.isAuth
    }
}

let AuthRedirectComponentWithAuth = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponentWithAuth);

export default DialogsContainer;