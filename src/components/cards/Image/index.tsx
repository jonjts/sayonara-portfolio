import React from 'react';

import { Card, TextContainer } from './styles';
import { S1, Caption } from "../../../pages/styles";

interface IImage {
    imageSorce: string,
    categoria: string,
    title: string,
    onClick(): void
}

const Image: React.FC<IImage> = ({ imageSorce, categoria, title, onClick }) => {

    return (
        <Card >
            <Card.Img variant="top" src={imageSorce} />
            <TextContainer>
                <Caption>{categoria}</Caption>
                <S1>{title}</S1>
            </TextContainer>

        </Card>
    )
}

export default Image;