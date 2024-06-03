import React from 'react'
import styled from 'styled-components';

import flov from "/flov.png"

const Container = styled.div`
display:flex;
`;

const InnerContainer = styled.div`
display: flex;

margin-top: 219px;
margin-left: 280px;
width: 268px;
height: 362px;
background-color: #575757;
border-radius: 5px;
`;

const Ph = styled.div`
& img {
        height: 268px;
        width: 195px;
        position: relative;
        bottom: 50px;

    }
`;

const Text_Container = styled.div`
`;

const Text1 = styled.div`
font-weight: 900;
letter-spacing: 10%;
text-align:right;
margin-top: 230px;
font-size: 20px;
line-height: 24px;
color: #3D3D3D;
`;

const Text2 = styled.div`
`;

const Text3 = styled.div`
`;

const Text4 = styled.div`
`;

function Blog() {
    return (
        <Container>
            <InnerContainer>
                <Ph>
                    <img src={flov} alt="Flov" />
                </Ph>
                <Text_Container>
                    <Text1>
                    September 12  I Read in 6 minutes
                    </Text1>
                    <Text2>
                    Cactus & Succulent
                    </Text2>
                    <Text3>
                    Cacti are succulents are easy care plants for any home or patio.
                    </Text3>
                    <Text4>
                    Read More
                    </Text4>
                </Text_Container>
            </InnerContainer>
        </Container>
    )
}

export default Blog