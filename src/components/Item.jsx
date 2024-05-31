import React from 'react'
import styled from 'styled-components';

import card1 from "/card1.png"; 

const Container = styled.div`


width: 258px;
height: 320px;
background-color: #F5F5F5;
border-radius: 40px;

margin-top: 101px;
& img {
        height: 250px;
        width: 250px;
    }
`;


const Card1 = styled.p`
font-weight: 400;
letter-spacing: 10%;
text-transform: uppercase;
justify-content: center;
font-size:16px;
& p {
        
    margin-left: 20px;


    }
    & span {
        padding-left: 20px;
        color: #46A358;
    }
`;

function Item() {
    return (
        <Container>
            <Card1>
            <img src={card1} alt="card1" />
            <p>Barberton Daisy </p><span>$119.00</span>
            </Card1>
            
        </Container>
    )
}

export default Item