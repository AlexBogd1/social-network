import React from 'react'
import { Redirect } from 'react-router-dom'

type IsAusType =  {
    isAuth?: boolean;
}


export function withAuthRedirect<T> (Component: React.ComponentType<T> )  {

   class RedirectComponent extends React.Component<T & {isAuth: boolean}> {
       render() {
            if(!this.props.isAuth){
                return <Redirect to={'/login'}/>
            } else
           return <Component{...this.props}/>
       }
   }

    return RedirectComponent;
}

// with arrow function
export let withArrowFuncAuthRedirect = <T,>(Component: React.ComponentType<T> ) => {

    let RedirectComponent = (props: T & {isAuth: boolean}) => {

            if(!props.isAuth){
                return <Redirect to={'/login'}/>
            }
            return <Component{...props}/>
        }

    return RedirectComponent;
}