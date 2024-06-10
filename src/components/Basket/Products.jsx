import React from 'react'
import styled from 'styled-components';

import bas1 from "/bas1.png";

const Container = styled.div`
display:flex;
padding-left: 100px;
padding-top: 70px;
`;

const Header = styled.div`
display: flex;
 & span{
    display: flex;
 }
`;

const Card1 = styled.div`
width: 700px;
height: 80px;
background-color: #585858;
border-radius: 15px;
display:flex;
justify-content: center;
margin-top:100px;
& img{
    margin-top:10px;
    width:60px;
    height:60px;
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

`;

const Valuee = styled.p`

`;

const Button_t1 = styled.button`

`;


function Products() {
    return (
        <Container>
            <Header>
                Products <span><p>Price</p> <p>Quantity</p> <p>Total</p></span>
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
        </Container>
    )
}

export default Products