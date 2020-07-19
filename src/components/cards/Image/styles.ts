import styled from 'styled-components';
import RootCard from 'react-bootstrap/Card'

export const Card = styled(RootCard)`


    @media (min-width:  1111px) {
        width: auto;
        
    }

    @media (min-width:  768px) {
        width: auto;
        max-width: 95%
    }

    @media (max-width: 768px) {
       width: auto;
       max-width: 369px;
    }

    border-radius: 10px 10px 10px 10px;
    border-color: transparent;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

    .card-img-top{
        
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    padding-left:16px;
`