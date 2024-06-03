import React from 'react' 
import styled from 'styled-components';
import photo_m from "/products/product1/main.png";
import photo_1 from "/products/product1/1.png"
import photo_2 from "/products/product1/2.png"

const Container = styled.div`
display: flex;
padding-left: 150px;
padding-top: 70px;
`;


const Details = styled.div`
& span{
  display: flex;
}
`;

const Column = styled.div`
display: inline;
width: 100px; 
& img{
  padding-bottom: 40px;
}
`;
const Photos = styled.div`
display: flex;
`;
const Main_photo = styled.div`
  background-color: #FBFBFB;
  height: 444px;
  width: 444px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const Name = styled.div`

`;
const Price = styled.div`

`;

function View() {
  return (
    <Container>
      <Photos>
          <Column>
            <div><img  src={photo_1} alt="" /></div>
            <div><img  src={photo_2} alt="" /></div>
          </Column>
          <Main_photo>
            <img  src={photo_m} alt="" />
          </Main_photo>
      </Photos>
      <Details>
        <div>
          <Name>Barberton Daisy</Name>
          <span><p>$</p><Price>190.00</Price></span>
        </div>


      </Details>
    </Container>
  )
}

export default View