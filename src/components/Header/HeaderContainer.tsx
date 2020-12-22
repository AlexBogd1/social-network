import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {ReduxStoreType} from "../../redux/redux-store";
import {logout, setAuthenticationUserData} from "../../redux/auth-reducer";


type HeaderContainerType = {
    isAuth: boolean
    login: string|null
    logout: () => void
    setAuthenticationUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        setAuthenticationUserData();
    }


    render(){
        return <Header {...this.props}/>
    }

}
const mapStateToProps = (state: ReduxStoreType) => ({
        isAuth: state.auth.isAuth,
        login:  state.auth.login,
})
export default connect(mapStateToProps, {setAuthenticationUserData, logout})(HeaderContainer);