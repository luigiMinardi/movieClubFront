import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { MODIFY_USER } from "../../redux/actions";

import * as S from './Account.styles';
import { baseURL } from "../../utils";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Field from "../../Components/Field";
import Button from "../../Components/Button";

const Account = (props) => {

    let navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: props.authedUser.user.name,
        surname: props.authedUser.user.surname,
        age: props.authedUser.user.age,
        email: props.authedUser.user.email,
        nickname: props.authedUser.user.nickname
    });

    const handleUserData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        props.dispatch({ type: MODIFY_USER, payload: { field: e.target.name, field_value: e.target.value } })
    }

    useEffect(() => {
        if (props.authedUser.token === '') {
            navigate('/login');
        }
    });

    const updateUser = async () => {
        let body = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            nickname: userData.nickname
        }

        let config = {
            headers: { Authorization: `Bearer ${props.authedUser.token}` }
        };

        try {
            let res = await axios.put(`${baseURL}/users/${props.authedUser.user.id}`, body, config);

            // if (res) {
            // TODO: CHANGE BACKEND RES TO RETURN A RES.DATA WITH THE NEW USER DATA.
            // }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Header />
            <Field
                label={`Name: ${props.authedUser.user.name}`}
                id='name'
                type='text'
                name='name'
                hasChange={handleUserData}
            />
            <Field
                label={`Surname: ${props.authedUser.user.surname}`}
                id='surname'
                type='text'
                name='surname'
                hasChange={handleUserData}
            />
            <Field
                label={`Nickname: ${props.authedUser.user.nickname}`}
                id='nickname'
                type='text'
                name='nickname'
                hasChange={handleUserData}
            />
            <Field
                label={`Email: ${props.authedUser.user.email}`}
                id='email'
                type='email'
                name='email'
                hasChange={handleUserData}
            />
            <Field
                label='password'
                id='password'
                type='password'
                name='password'
            />
            <Button func={updateUser} >Update</Button>
            <Footer />
        </div>
    );
}

export default connect((state) => ({
    authedUser: state.authedUser
}))(Account);