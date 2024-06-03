import React from 'react'
import styled from 'styled-components';

import plant1 from "/plant1.png"

const Container = styled.div`
display: flex;
margin-top: 271px;
margin-left: 170px;
width: 586px;
height: 250px;
background-color: #9e9e9e;
border-radius: 15px;
`;

const Ph = styled.div`

& img {
        height: 292px;
        width: 292px;
        position: relative;
        bottom: 50px;

    }
`;

const Text1 = styled.p`
font-weight: 900;
letter-spacing: 10%;
text-transform: uppercase;
text-align: right;
padding-right: 34px;
padding-top: 37px;
font-size:18px;
color: #3D3D3D;
`;

const Text2 = styled.p`
color: #3D3D3D;
font-weight: 500;
padding-left: 269px;
padding-bottom: 111px;
font-size:14px;
`;

const Text_Container = styled.div`
`;

function Basement() {
    return (
        <Container>
            <Ph>
                <img src={plant1} alt="Plant1" />
            </Ph>
            <Text_Container>
                <Text1>
                    Summer cactus & succulents
                </Text1>
                <Text2>
                <p>We are an online plant shop offering a</p> <p>wide range of cheap and trendy plants</p> 
                </Text2>
            </Text_Container>
        </Container>
    )
}

export default Basement