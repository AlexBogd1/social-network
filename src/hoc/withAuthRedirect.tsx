import React from 'react'
import {Redirect} from 'react-router-dom'
import {ReduxStoreType} from "../redux/redux-store";
import {connect} from "react-redux";


type RedirectComponentType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (store: ReduxStoreType) => ({
    isAuth: store.auth.isAuth,
})

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP> )  {

   class RedirectComponent extends React.Component<RedirectComponentType> {

       render() {
           const {isAuth, ...props} = this.props

            if(!isAuth){
                return <Redirect to={'/login'}/>
            } else
           return <WrappedComponent{...props as WCP}/>
       }
   }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

// with arrow function
export let withArrowFuncAuthRedirect = <T,>(Component: React.ComponentType<T> ) => {

    let RedirectComponent = (props: RedirectComponentType) => {
             const {isAuth, ...restProps} = props
            if(!props.isAuth){
                return <Redirect to={'/login'}/>
            }
            return <Component{...restProps as T}/>
        }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}