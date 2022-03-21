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

    const [maxIndex, setMaxIndex] = useState(4)  // Number of pages on the carousel


    useEffect(async () => {
        let res = await getMovies();
        if (componentMounted.current) {
            setMovies(res);
        }
        return () => {
            componentMounted.current = false;
        }
    }, []);

    const getMovies = async (endpoint = 'movies') => {
        try {
            let res = await axios.get(`${baseURL}/${endpoint}`);
            setMaxIndex(Math.ceil(movies.length / scrollLength));
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    const selectMovie = (e, movie) => {
        if (!e.target.className.includes('action')) {
            // console.log(movie);
            props.dispatch({ type: MOVIE_INFO, payload: movie });
            navigate('/detail')
        } else {
            console.log('action')
        }
    }

    const logOut = () => {
        props.dispatch({ type: LOGOUT });
    }

    // Carousel
    const [activeIndex, setActiveIndex] = useState(0);

    let scrollLength = 6; // Number of movies displayed on screen

    // if (element.offsetWidth + element.scrollLeft >= element.scrollWidth) { console.log("we are at the end")}
    // console.log(maxIndex)
    const move = (e, direction) => {
        const slider = e.target.offsetParent.children[3]; // From NavigateButton (target), go to Parent (Container) and pick 4th child (Slider)
        let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
        let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. //TODO: make work for mobile because (4 movies/page instead of 6)
        // console.log(`movieWidth = ${movieWidth}`);
        // console.log(`scrolling right ${scrollDistance}`);
        if (direction === 'right' && activeIndex === maxIndex - 1) {
            console.log("in the end it doesn't even matter")
            slider.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            })
            setActiveIndex(0);
        } else if (direction === 'left' && activeIndex === 0) {
            console.log("in the start it doesn't even matter")
            slider.scrollTo({
                top: 0,
                left: slider.scrollWidth,
                behavior: "smooth",
            })
            setActiveIndex(maxIndex - 1);
        } else {
            slider.scrollBy({
                top: 0,
                left: direction === 'right' ? +scrollDistance : -scrollDistance,
                behavior: "smooth",
            });
            let updater = (direction === 'right' && direction) ? (activeIndex + 1) % maxIndex : (activeIndex - 1) % maxIndex;
            setActiveIndex(updater)
            // console.log('up', updater)
        }
        // console.log('index', activeIndex);
    };


    return (
        <>
            <Header>
                <S.ButtonHeader disabled={true}>Search</S.ButtonHeader>
                {props.user?.token
                    ?
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img onClick={() => { navigate('/YourAccount') }} src={profilepic} alt={props.user.user.name} style={{ width: '2em', height: 'auto', marginRight: '1.3em', cursor: 'pointer' }} />
                        <S.ButtonHeader func={logOut}>Sign Off</S.ButtonHeader>
                    </div>
                    : <S.ButtonHeader param='/login'>Sign In</S.ButtonHeader>
                }
            </Header>

            <S.Container>
                <S.Title>Foo</S.Title>
                <S.NavigateButton
                    type='button'
                    id='moveLeft'
                    onClick={(e) => {
                        if (e.detail === 1) { move(e, 'left') }
                        if (e.detail !== 1 && activeIndex !== 0) { move(e, 'left') }
                        if (e.detail > maxIndex && activeIndex === 0) { alert("cooldown dude") }
                    }}
                >◀</S.NavigateButton>
                <S.Indicators>
                    {
                        [...Array(maxIndex).keys()].map(indicator => {
                            return (
                                <S.Indicator key={indicator} className='indicator' active={activeIndex} index={indicator}></S.Indicator>
                            )
                        })
                    }
                </S.Indicators>
                <S.Slider>
                    {movies[0]?.id
                        ? movies.map(movie => {
                            return (
                                <S.Movie key={movie.id} id={movie.id} className='movie'>
                                    <S.Banner src={movie.image} alt={movie.title} />
                                    <S.Description onClick={(e) => selectMovie(e, movie)}>
                                        <S.Buttons>
                                            <S.MovieButton className='action'>▶</S.MovieButton>
                                            <S.MovieButton className='action'>➕</S.MovieButton>
                                            <S.MovieButton className='action'>👍</S.MovieButton>
                                            <S.MovieButton className='action'>👎</S.MovieButton>
                                            <S.MovieButton>🔻</S.MovieButton>
                                        </S.Buttons>
                                        <S.Data>
                                            <S.Match>87% Match</S.Match>
                                            <S.Rating>12+</S.Rating>
                                            <span>1h 47m</span>
                                        </S.Data>
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
                        : <div>Loading...</div>
                    }
                </S.Slider>
                <S.NavigateButton
                    type='button'
                    id='moveRight'
                    onClick={(e) => {
                        if (e.detail === 1) { move(e, 'right') }
                        if (e.detail !== 1 && activeIndex !== maxIndex - 1) { move(e, 'right') }
                        if (e.detail > maxIndex && activeIndex === maxIndex - 1) { alert("cooldown dude") }
                    }}
                >▶</S.NavigateButton>
            </S.Container>

            <S.Container>
                <S.Title>Bar</S.Title>
                <S.NavigateButton
                    type='button'
                    id='moveLeft'
                    onClick={(e) => {
                        if (e.detail === 1) { move(e, 'left') }
                        if (e.detail !== 1 && activeIndex !== 0) { move(e, 'left') }
                        if (e.detail > maxIndex && activeIndex === 0) { alert("cooldown dude") }
                    }}
                >◀</S.NavigateButton>
                <S.Indicators>
                    {
                        [...Array(maxIndex).keys()].map(indicator => {
                            return (
                                <S.Indicator key={indicator} className='indicator' active={activeIndex} index={indicator}></S.Indicator>
                            )
                        })
                    }
                </S.Indicators>
                <S.Slider>
                    {movies[0]?.id
                        ? movies.map(movie => {
                            return (
                                <S.Movie key={movie.id} id={movie.id} className='movie'>
                                    <S.Banner src={movie.image} alt={movie.title} />
                                    <S.Description onClick={(e) => selectMovie(e, movie)}>
                                        <S.Buttons>
                                            <S.MovieButton className='action'>▶</S.MovieButton>
                                            <S.MovieButton className='action'>➕</S.MovieButton>
                                            <S.MovieButton className='action'>👍</S.MovieButton>
                                            <S.MovieButton className='action'>👎</S.MovieButton>
                                            <S.MovieButton>🔻</S.MovieButton>
                                        </S.Buttons>
                                        <S.Data>
                                            <S.Match>87% Match</S.Match>
                                            <S.Rating>12+</S.Rating>
                                            <span>1h 47m</span>
                                        </S.Data>
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
                        : <div>Loading...</div>
                    }
                </S.Slider>
                <S.NavigateButton
                    type='button'
                    id='moveRight'
                    onClick={(e) => {
                        if (e.detail === 1) { move(e, 'right') }
                        if (e.detail !== 1 && activeIndex !== maxIndex - 1) { move(e, 'right') }
                        if (e.detail > maxIndex && activeIndex === maxIndex - 1) { alert("cooldown dude") }
                    }}
                >▶</S.NavigateButton>
            </S.Container>

            <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' title="Questions? Make a Issue" />
        </>
    )
}

export default connect((store) => ({
    user: store.authedUser
}))(Browse);