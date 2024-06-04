import React from 'react'
import styled from 'styled-components';
import trava from "/trava.svg"; 
import Calling from "/End/Calling.svg"; 
import Location from "/End/Location.svg"; 
import Message from "/End/Message.svg"; 
const Container = styled.div`
width: auto;
height: 85px;
`;


const Container_items = styled.div`
padding-left: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

background-color: #46a35947;

`;

const Item = styled.div`
display: flex;
height: 50px;
width: 300px;
`;


function end() {
  return (
    <Container>
    <Container_items>
        <Item><img src={trava} alt="" /><h1></h1></Item>
        <Item><img src={Location} alt="" /><p>70 West Buckingham Ave. Farmingdale, NY 11735</p></Item>
        <Item><img src={Message} alt="" /><p>contact@greenshop.com</p></Item>
        <Item><img src={Calling} alt="" /><p>+88 01911 717 490</p></Item>
    </Container_items>
</Container>
  )
}

export default end