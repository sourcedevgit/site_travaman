import React from 'react'
import styled from 'styled-components';

import flov1 from "/flov1.png"

const Container = styled.div`
display:flex;
`;

const InnerContainer = styled.div`
display: flex;

margin-top: 219px;
margin-left: 280px;
width: 268px;
height: 362px;
background-color: #FBFBFB;
border-radius: 5px;
`;

const Ph = styled.div`
& img {
        height: 195px;
        width: 268px;


    }
`;

const Text_Container = styled.div`


`;

const Text1 = styled.div`

font-weight: 400;
text-align:center;

font-size: 14px;

color: #46A358;
`;

const Text2 = styled.div`
margin-left: 15px;
margin-top: 4px;
font-weight: 700;
font-size: 20px;
color: #3D3D3D;
`;

const Text3 = styled.div`
margin-left: 15px;
margin-top: 4px;
font-weight: 400;
font-size: 14px;
color: #3D3D3D;
`;

const Text4 = styled.div`
margin-left: 15px;
margin-top: 9px;
font-weight: 500;
font-size: 14px;
color: #3D3D3D;
`;

function Blog() {
    return (
        <Container>
            <InnerContainer>
                <Ph>
                    <img src={flov1} alt="Flov" />
                <Text_Container>
                    <Text1>
                    September 12  I Read in 6 minutes
                    </Text1>
                    <Text2>
                    Cactus & Succulent Care Tips
                    </Text2>
                    <Text3>
                    Cacti are succulents are easy care plants for any home or patio.
                    </Text3>
                    <Text4>
                    Read More
                    </Text4>
                </Text_Container>
                </Ph>
            </InnerContainer>
        </Container>
    )
}

export default Blog