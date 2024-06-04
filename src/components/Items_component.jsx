import React from 'react'
import Item from './Item'
import styled from 'styled-components';
import Filtres from './Filters';

const Container = styled.div`
display: flex;
justify-content: center;
`;

const GridContainer = styled.div`
display: grid;
justify-content: center;
padding-left: 100px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 300px 300px 300px;
`;

function Items_component() {
  return (
    <Container>
      <Filtres/>
      <GridContainer>
        <Item/> 
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </GridContainer>
    </Container>
  )
}

export default Items_component