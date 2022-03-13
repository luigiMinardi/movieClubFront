import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { MODIFY_CREDENTIALS } from "../../redux/actions";

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

            if (res) {
                props.dispatch({ type: MODIFY_CREDENTIALS, payload: userData })
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Header />
            <Field
                label={props.authedUser.user.name}
                id='name'
                type='text'
                name='name'
                onChange={handleUserData}
            />
            <Field
                label={props.authedUser.user.surname}
                id='surname'
                type='text'
                name='surname'
                onChange={handleUserData}
            />
            <Field
                label={props.authedUser.user.nickname}
                id='name'
                type='text'
                name='name'
                onChange={handleUserData}
            />
            <Field
                label={props.authedUser.user.email}
                id='email'
                type='email'
                name='email'
                onChange={handleUserData}
            />
            <Field
                label='password'
                id='password'
                type='password'
                name='password'
            />
            <Button onClick={updateUser} >Update</Button>
            <Footer />
        </div>
    );
}

export default connect((state) => ({
    authedUser: state.authedUser
}))(Account);