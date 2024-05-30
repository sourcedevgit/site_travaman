import React from 'react'
import Item from './Item'
import styled from 'styled-components';


const Container = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 300px 300px 300px;
`;

function Items_component() {
  return (
    <Container>
      <Item/> 
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </Container>
  )
}

export default Items_component