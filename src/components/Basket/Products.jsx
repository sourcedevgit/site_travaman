import React from 'react'
import styled from 'styled-components';

import bas1 from "/bas1.png";

const Container = styled.div`
display: flex;
padding-top: 70px;
justify-content: center;
padding-bottom: 90px;
`;

const Container_all = styled.div`
`;

const Text1 = styled.div`
`;

const Text2 = styled.div`
`;

const Text3 = styled.div`
`;

const Text4 = styled.div`
`;

const Header = styled.div`

`;

const Card1 = styled.div`


& img{

}
`;
const Container_Product = styled.div`

`;

const Name = styled.div`

`;

const Price = styled.div`

`;

const Total = styled.div`

`;

const Quantity = styled.div`
display: flex;
font-size: 16px;
font-weight: 600;
margin-top: 26px;
& span{
  display:flex;
}
`;

const Valuee = styled.p`
margin-top:15px;
font-size:20px;
font-weight:400;
padding-left: 30px;
padding-right: 30px;
`;


const Button_t1 = styled.button`
font-weight: 500;
font-size: 25px;
height: 34px;
width: 34px;
border-radius: 20px;
color: white;
background-color: #46A358;
border-color: #46A358;
border-style: solid;
margin-top: 10px;
`;


function Products() {
    return (
        <Container>
            <Container_all>
                <Header>
                    <Text1>Products</Text1>
                    <Text2>Price</Text2>
                    <Text3>Quantity</Text3>
                    <Text4>Total</Text4>
                </Header>
                <Container_Product>
                    <Card1>
                        <img src={bas1} alt="basket" />
                        <Name>
                            <p>Barberton Daisy</p>
                            <span>SKU: 1 995751877966</span>
                        </Name>
                        <Price>
                            $119.00
                        </Price>
                        <Quantity>
                            <span>
                                <Button_t1>-</Button_t1>
                                <Valuee>1</Valuee>
                                <Button_t1>+</Button_t1>
                            </span>
                        </Quantity>
                        <Total>
                            $238.00
                        </Total>
                    </Card1>
                </Container_Product>
            </Container_all>
        </Container>
    )
}

export default Products