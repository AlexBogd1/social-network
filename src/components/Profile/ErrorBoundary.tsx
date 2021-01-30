import React, { ErrorInfo } from 'react'




class ErrorBoundary extends React.Component {
    constructor(props:any){
        super(props);
        this.state = {haError: false}
    }

    state = {haError: false}
    
    componentDidCatch(error: Error, errorMessage: ErrorInfo){
        this.setState({haError: true});
        console.log("errorMessage: ",errorMessage)
    }
    
    render(){
        if(this.state.haError) {
            return (
                <h1>Error</h1>
            ) 
        } 
            
        return this.props.children;

    }
}

export default ErrorBoundary;