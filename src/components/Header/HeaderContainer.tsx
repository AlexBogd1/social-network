import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import axios from "axios";
import {ReduxStoreType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";


type HeaderContainerType = {
    isAuth: boolean
    login: string|null
    setAuthUserData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
            usersAPI.auth()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, email, login);
                }
        })
    }


    render(){
        return <Header {...this.props}/>
    }

}
const mapStateToProps = (state: ReduxStoreType) => ({
        isAuth: state.auth.isAuth,
        login:  state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);