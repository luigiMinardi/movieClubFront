import React, { useEffect } from 'react';
import * as S from './Detail.styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseURL } from '../../utils';
import Button from '../../Components/Button';
import axios from 'axios';

const Detail = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.detail?.title) {
            navigate('/browse');
        }
    })

    const rent = async (movieId, token, userId) => {
        let body = {
            price: 5,
            movieId: movieId,
            userId: userId,
            date: Date.now()
        };

        let config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        try {
            let res = await axios.post(`${baseURL}/orders`, body, config)
            if (res.status === 200) {
                console.log(res.data)
                navigate('/browse')
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Header>
                <S.ButtonHeader param='/browse'>Return</S.ButtonHeader>
                <S.ButtonHeader>Click to Sign off</S.ButtonHeader>
            </Header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h1>{props.detail?.title}</h1>
                <p style={{ paddingInline: '1.5em' }}>{props.detail?.overview}</p>
                <img src={props.detail.image} alt={props.detail.title} />
                <>
                    {props.authenticatedUser.token &&
                        <Button func={rent} param={[props.detail.id, props.authenticatedUser.token, props.authenticatedUser.user.id]}>
                            Rent
                        </Button>
                    }
                </>
            </div>

            <Footer
                pt='4.375em'
                pr='2.8em'
                pl='2.8em'
                margin='0 auto'
                maxWidth='62.5rem'
                title="Questions? Make a Issue"
            />
        </>
    )
}

export default connect((state) => ({
    authenticatedUser: state.authenticatedUser,
    detail: state.requestedMovie.info
}))(Detail);