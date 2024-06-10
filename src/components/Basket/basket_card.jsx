import React from 'react'
import styled from 'styled-components';

import bas1 from "/bas1.png";

const Card = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
justify-content: center;
margin-top:100px;
align-items: center;
width: 1000px;
height: 80px;
background-color: #FBFBFB;
border-radius: 15px;

& img{
    margin-left: 10px;
    width:60px;
    height:60px;
}
`;


const Name = styled.div`
font-size: 14px;
color: #3D3D3D;
& span{
    color: #727272;
}

& p{
    color: #3D3D3D;
    font-weight: 600;
    font-size: 16px;
}
`;

const Price = styled.div`
color: #727272;
margin-left: 100px;
`;

const Total = styled.div`
font-size:16px;
font-weight: 700;
color: #46A358;
display: flex;
justify-content: center;
align-items: center;
`;

const Quantity = styled.div`
& span{
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const Value = styled.p`
padding-left: 10px;
padding-right: 10px;
`;

const Button_t1 = styled.button`

font-weight: 500;
font-size: 16px;
height: 22px;
width: 22px;
border-radius: 20px;
color: white;
background-color: #46A358;
border-color: #46A358;
border-style: solid;


& span {
  display: flex;
  font-size: 2rem;
  width: 50px;
  text-align: center;
  
  align-items: center;
}
`;


function basket_card() {
  return (
    
    <Card>
        <img src={bas1} alt="basket" />
        <Name>
            <p>Barberton Daisy</p>
            <span>SKU:1 995751877966</span>
        </Name>
        <Price>
            $<span>119.00</span>
        </Price>
        <Quantity>
            <span>
                <Button_t1>-</Button_t1>
                <Value>1</Value>
                <Button_t1>+</Button_t1>
            </span>
        </Quantity>
        <Total>
            $<p>238.00</p>
        </Total>
    </Card>


  )
}

export default basket_card