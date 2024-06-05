import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 258px;
  height: 320px;
  background-color: #F5F5F5;
  border-radius: 25px;
  margin-top: 100px;

  & img {
    height: 250px;
    width: 250px;
  }
`;

const Card1 = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  & p {
    margin-left: 20px;
  }
  & span {
    padding-left: 20px;
    color: #46A358;
  }
`;

function Item({ name, price, image }) {
  return (
    <Container>
      <Card1>
        <img src={image} alt={name} />
        <p>{name}</p><span>{price}</span>
      </Card1>
    </Container>
  );
}

export default Item; 
