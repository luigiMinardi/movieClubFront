import React, { useEffect } from 'react';
import * as S from './Detail.styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseImageURL } from '../../utils';
import Button from '../../Components/Button';

const Detail = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.detail?.title) {
            navigate('/browse');
        }
    })

    return (
        <>
            <Header>
                <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                <S.ButtonHeader>Click to Signoff</S.ButtonHeader>
            </Header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h1>{props.detail?.title}</h1>
                <p style={{ paddingInline: '1.5em' }}>{props.detail?.overview}</p>
                <img src={baseImageURL + props.detail.poster_path} alt={props.detail.title} />
                <>
                    {props.authedUser.token &&
                        <Button func={() => console.log('Rented')}>
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
    authedUser: state.authedUser,
    detail: state.requestedMovie.info
}))(Detail);