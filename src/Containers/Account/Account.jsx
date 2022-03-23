import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { LOGOUT, MODIFY_USER } from "../../redux/actions";

import * as S from './Account.styles';
import profilepic from '../../assets/images/profilepic.png';

import { baseURL } from "../../utils";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Field from "../../Components/Field";
import Button from "../../Components/Button";

const Account = (props) => {

    let navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [movies, setMovies] = useState([]);
    let mapI = useRef(0);
    const [defaultData, setDefaultData] = useState({});
    const componentMounted = useRef(true);

    useEffect(async () => {
        setDefaultData({
            name: props.authedUser.user.name,
            surname: props.authedUser.user.surname,
            age: props.authedUser.user.age,
            email: props.authedUser.user.email,
            nickname: props.authedUser.user.nickname
        });

        let res = await getOrders();
        if (componentMounted.current) {
            setOrders(res);
        }
        return () => {
            componentMounted.current = false;
        }
    }, []);

    const getOrders = async () => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${props.authedUser.token}` }
            };
            let res = await axios.get(`${baseURL}/orders/user`, config);

            let moviesRequested = []
            for (let data in res.data) {
                let resultMovies = await axios.get(`${baseURL}/movies/${res.data[data].movieId}`, config);
                moviesRequested.push(resultMovies.data)
            }
            setMovies(moviesRequested)
            return res.data;
        } catch (error) {
            console.log(error.response)
        }
    }

    const [userData, setUserData] = useState({
        name: props.authedUser.user.name,
        surname: props.authedUser.user.surname,
        age: props.authedUser.user.age,
        email: props.authedUser.user.email,
        nickname: props.authedUser.user.nickname
    });

    const handleUserData = (e) => {
        if (e.target.value) {
            setUserData({ ...userData, [e.target.name]: e.target.value });
            props.dispatch({ type: MODIFY_USER, payload: { field: e.target.name, field_value: e.target.value } })
        } else {
            setUserData({ ...userData, [e.target.name]: defaultData[e.target.name] });
            props.dispatch({ type: MODIFY_USER, payload: { field: e.target.name, field_value: defaultData[e.target.name] } })
        }
    }

    useEffect(() => {
        if (props.authedUser.token === '') {
            navigate('/login');
        }
    });

    const logOut = () => {
        props.dispatch({ type: LOGOUT });
    }

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
        <>
            <Header >
                <S.ButtonHeader param='/browse'>Catalog</S.ButtonHeader>
                {props.authedUser?.token
                    ?
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img onClick={() => { navigate('/YourAccount') }} src={profilepic} alt={props.authedUser.user.name} style={{ width: '2em', height: 'auto', marginRight: '1.3em', cursor: 'pointer' }} />
                        <S.ButtonHeader func={logOut}>Sign Off</S.ButtonHeader>
                    </div>
                    : <S.ButtonHeader param='/login'>Sign In</S.ButtonHeader>
                }
            </Header>
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <section style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <S.Title style={{ alignSelf: 'flex-start' }}>Change Your data</S.Title>
                    <Field
                        label={`Name: ${props.authedUser.user.name}`}
                        id='name'
                        type='text'
                        name='name'
                        hasChange={handleUserData}
                        bg='white'
                        inputColor='black'
                    />
                    <Field
                        label={`Surname: ${props.authedUser.user.surname}`}
                        id='surname'
                        type='text'
                        name='surname'
                        hasChange={handleUserData}
                        bg='white'
                        inputColor='black'
                    />
                    <Field
                        label={`Nickname: ${props.authedUser.user.nickname}`}
                        id='nickname'
                        type='text'
                        name='nickname'
                        hasChange={handleUserData}
                        bg='white'
                        inputColor='black'
                    />
                    <Field
                        label={`Email: ${props.authedUser.user.email}`}
                        id='email'
                        type='email'
                        name='email'
                        hasChange={handleUserData}
                        bg='white'
                        inputColor='black'
                    />
                    {/* <Field
                        label='password'
                        id='password'
                        type='password'
                        name='password'
                        bg='white'
                        inputColor='black'
                    /> */}
                    <Button func={updateUser} >Update</Button>
                </section>
                <section>
                    <S.Title>Orders</S.Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                        {orders && orders.map(order => {
                            if (mapI < orders.length - 1) {
                                mapI++
                                // console.log('ampi', mapI)
                            } else {
                                mapI = 0
                                // console.log('anmpi', mapI)
                            }
                            return (
                                <S.Movie key={order.id} id={order.id}>
                                    <S.Banner src={movies[mapI].image} alt={movies[mapI].title} />
                                    <S.Description >
                                        <S.Data>
                                            <div>
                                                <span>Movie: </span>
                                                <S.Match>{movies[mapI].title}</S.Match>
                                            </div>
                                            <S.Rating>{movies[mapI].adult ? <span>Adult</span> : <span>Family</span>}</S.Rating>
                                        </S.Data>
                                        <span>{movies[mapI].date}</span>
                                        <S.Type>
                                            <span>Explosive</span>
                                            <S.Middot>&middot;</S.Middot>
                                            <span>Exciting</span>
                                            <S.Middot>&middot;</S.Middot>
                                            <span>Family</span>
                                        </S.Type>
                                    </S.Description>
                                </S.Movie>
                            )
                        })
                        }
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default connect((state) => ({
    authedUser: state.authedUser
}))(Account);