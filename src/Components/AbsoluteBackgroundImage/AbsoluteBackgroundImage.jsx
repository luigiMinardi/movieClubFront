import React from "react";
import * as S from './styles';

import background from '../../assets/images/background-movies.jpg';
import background2 from '../../assets/images/background2-movies.jpg';

const AbsoluteBackgroundImage = () => {
    return (
        <S.BackgroundImageWrapper>
            <S.BackgroundImage src={Math.floor(Math.random() * 2) ? background : background2} alt="Background Home showing movies" />
            <S.BackgroundGradient></S.BackgroundGradient>
        </S.BackgroundImageWrapper>
    )
}

export default AbsoluteBackgroundImage;