import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from './Browse.styles';
import profilepic from '../../assets/images/profilepic.png';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { baseImageURL, baseURL } from '../../utils';
import { connect } from 'react-redux';
import { LOGOUT, MOVIE_INFO } from '../../redux/actions';

const Browse = (props) => {

    const [movies, setMovies] = useState([]);
    let navigate = useNavigate();
    const componentMounted = useRef(true);

    useEffect(async () => {
        let res = await getMovies();
        if (componentMounted.current) {
            setMovies(res);
        }
        return () => {
            componentMounted.current = false;
        }
    }, []);

    const getMovies = async () => {
        try {
            let res = await axios.get(`${baseURL}/movie-db/new`);
            return res.data.results;
        } catch (e) {
            console.log(e);
        }
    }

    const selectMovie = (movie) => {
        console.log(movie);

        props.dispatch({ type: MOVIE_INFO, payload: movie });

        navigate('/detail')
    }

    const logOut = () => {
        props.dispatch({ type: LOGOUT });
    }

    return (
        <>
            <Header>
                <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                {props.user?.token
                    ?
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img onClick={() => { navigate('/YourAccount') }} src={profilepic} alt={props.user.user.name} style={{ width: '2em', height: 'auto', marginRight: '1.3em', cursor: 'pointer' }} />
                        <S.ButtonHeader func={logOut}>Click to Sign Off</S.ButtonHeader>
                    </div>
                    : <S.ButtonHeader param='/login'>Sign In</S.ButtonHeader>
                }
            </Header>

            {movies[0]?.id
                ? movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => selectMovie(movie)}>
                            <img src={baseImageURL + movie.poster_path} alt={movie.title} />
                            <p>{movie.overview}</p>
                        </div>
                    )
                })
                : <div>Loading...</div>
            }

            <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' title="Questions? Make a Issue" />
        </>
    )
}

export default connect((store) => ({
    user: store.authedUser
}))(Browse);