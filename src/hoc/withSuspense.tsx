import React, { Suspense } from 'react'
import Preloader from '../components/common/Preloader'



type RedirectComponentType = {
    isAuth: boolean
}




// with arrow function
export let withSuspense = <T,>(Component: React.ComponentType<T> ) => {
    return (props:T) => {
       return <Suspense fallback={<Preloader />}>
           <Component {...props}/>
           </Suspense>
    }
}