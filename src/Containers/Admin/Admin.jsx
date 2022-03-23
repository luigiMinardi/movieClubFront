import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from './Admin.styles';
import profilepic from '../../assets/images/profilepic.png';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { baseURL } from '../../utils';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/actions';

const Admin = (props) => {

    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);
    let mapI = useRef(0);
    let navigate = useNavigate();
    const componentMounted = useRef(true);

    useEffect(async () => {
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
                headers: { Authorization: `Bearer ${props.user.token}` }
            };
            let res = await axios.get(`${baseURL}/orders`, config);

            let usersThatRequested = []
            let moviesRequested = []
            for (let data in res.data) {
                let resultUsers = await axios.get(`${baseURL}/users/${res.data[data].userId}`, config);
                let resultMovies = await axios.get(`${baseURL}/movies/${res.data[data].movieId}`, config);
                usersThatRequested.push(resultUsers.data)
                moviesRequested.push(resultMovies.data)
            }
            setUsers(usersThatRequested)
            setMovies(moviesRequested)
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    const logOut = () => {
        props.dispatch({ type: LOGOUT });
    }

    if (orders[0]?.id) {
        return (
            <>
                <Header>
                    <S.ButtonHeader param='/browse'>Catalog</S.ButtonHeader>
                    {props.user?.token
                        ?
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <img onClick={() => { navigate('/YourAccount') }} src={profilepic} alt={props.user.user.name} style={{ width: '2em', height: 'auto', marginRight: '1.3em', cursor: 'pointer' }} />
                            <S.ButtonHeader func={logOut}>Sign Off</S.ButtonHeader>
                        </div>
                        : <S.ButtonHeader param='/login'>Sign In</S.ButtonHeader>
                    }
                </Header>

                <S.Title>Orders</S.Title>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>

                    {props.user?.user?.isAdmin ?
                        orders.map(order => {

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
                                        <S.Type>
                                            <span>{movies[mapI].title}</span>
                                            <S.Middot>&middot;</S.Middot>
                                            {movies[mapI].adult ? <span>Adult</span> : <span>Family</span>}
                                        </S.Type>
                                        <span>{movies[mapI].date}</span>
                                        <S.Data>
                                            <div>
                                                <span>User: </span>
                                                <S.Match>{users[mapI].name}</S.Match>
                                            </div>
                                            <S.Rating>{users[mapI].email}</S.Rating>
                                        </S.Data>
                                    </S.Description>
                                </S.Movie>
                            )
                        })
                        : <div>401 Unauthorized</div>
                    }
                </div>

                <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' title="Questions? Make a Issue" />
            </>
        )
    } else {
        return (
            <>
                <div>
                    Cries in .json
                </div>
            </>
        )
    }
}
export default connect((store) => ({
    user: store.authedUser
}))(Admin);