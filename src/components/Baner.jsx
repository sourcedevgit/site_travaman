import React from 'react'
import styled from 'styled-components';

import plants from "/plants.png"

const Container = styled.div`
display: flex;
justify-content: center;
`;

const InnerContainer = styled.div`
display: flex;

width: 1200px;
height: 450px;
background-color: #F5F5F5;
border-radius: 25px;
margin-top: 20px;
& img {
        padding-bottom: 100px;
        padding-left: px;
        height: 460px;
        width: 460px;
    }
`;




const Text1 = styled.p`
font-weight: 500;
letter-spacing: 10%;
text-transform: uppercase;
padding-left: 43px;
padding-top:68px;
font-size:14px;
`;
const Text2 = styled.p`
color: #3D3D3D;
font-weight: 900;
text-transform: uppercase;
padding-left: 40px;
font-size:70px;
& span {
        color: #46A358;
    }
`;
const Text3 = styled.p`
color: #727272;
padding-left: 43px;
font-size:14px;
`;
const Text_Container = styled.div`

& button {
    background-color: #46A358;
    &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  } 
    }

`;

const ShopButton = styled.button`
    margin-top: 40px;
    margin-left: 43px;
    color: white;
    height: 35px;
    width: 100px;
    border-radius: 6px;
    border: none;
    background-color: #46A358;
    align-items: center;
    font-size: 16;
    font-weight: 700;
    
`;


function Baner() {
  return (
<Container>
    <InnerContainer>
        <Text_Container>
            <Text1>
            Welcome to TRAVAMAN
            </Text1>
            <Text2>
            Let’s Make a Better <span>Planet</span> 
            </Text2>
            <Text3>
            We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </Text3>
            <ShopButton>SHOP NOW</ShopButton>
        </Text_Container>
        <img src={plants} alt="Plants" />
    </InnerContainer>
</Container>
    
  )
}

export default Baner