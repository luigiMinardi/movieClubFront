import React, { useEffect, useState } from 'react';
import * as S from './Browse.styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseImageURL, baseURL } from '../../utils';
import { connect } from 'react-redux';
import { MOVIE_INFO } from '../../redux/actions';

const Browse = (props) => {

    const [movies, setMovies] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        try {
            let res = await axios.get(`${baseURL}/movie-db/new`);

            setTimeout(() => {
                setMovies(res.data.results);
            }, 2000);

        } catch (e) {
            console.log(e);
        }
    }

    const selectMovie = (movie) => {
        console.log(movie);

        props.dispatch({ type: MOVIE_INFO, payload: movie });

        navigate('/detail')
    }
    if (movies[0]?.id !== undefined) {
        return (
            <>
                <Header>
                    <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                    <S.ButtonHeader>Click to Signoff</S.ButtonHeader>
                </Header>

                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={()=>selectMovie(movie)}>
                            <img src={baseImageURL + movie.poster_path} alt={movie.title} />
                            <p>{movie.overview}</p>
                        </div>
                    )
                })}

                <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' title="Questions? Make a Issue" />
            </>
        )
    }
    else {
        return (
            <>
                <Header>
                    <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                    <S.ButtonHeader>Click to Signoff</S.ButtonHeader>
                </Header>

                <div>Loading...</div>

                <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' title="Questions? Make a Issue" />
            </>
        )
    }
}

export default connect()(Browse);