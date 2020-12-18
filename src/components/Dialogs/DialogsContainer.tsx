import React from "react";
import {SendMessageActionType, sendMessageCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {withArrowFuncAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (store: ReduxStoreType) =>{
     return { 
         dialogPage: store.dialogPage,
        }
    }

const mapDispatchToProps = (dispatch: (action:  SendMessageActionType) => void) => {
    return {
        onSendMessageClick: (message: string) => dispatch(sendMessageCreator(message)),
    }

}

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withArrowFuncAuthRedirect)(Dialogs);



// const mapStateToPropsForRedirect = (store: ReduxStoreType) =>{
//     return {
//         isAuth: store.auth.isAuth
//     }
// }
//
// let AuthRedirectComponentWithAuth = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
//
// let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponentWithAuth);