import React, { useEffect, useState } from "react";
import * as S from './AbsoluteBgImg.styles';

import background from '../../assets/images/background-movies.jpg';
import background2 from '../../assets/images/background2-movies.jpg';

const AbsoluteBackgroundImage = () => {

    const [bgImage, setBgImage] = useState(background);

    useEffect(() => {
        setBgImage(Math.floor(Math.random() * 2) ? background : background2)
    }, [])

    return (
        <S.BackgroundImageWrapper>
            <S.BackgroundImage src={bgImage} alt="Background Home showing movies" />
            <S.BackgroundGradient></S.BackgroundGradient>
        </S.BackgroundImageWrapper>
    )
}

export default AbsoluteBackgroundImage;