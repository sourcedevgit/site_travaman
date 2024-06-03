import React from 'react' 
import styled from 'styled-components';
import photo_m from "/products/product1/main.png";
import photo_1 from "/products/product1/1.png";
import photo_2 from "/products/product1/2.png";
import stare from"/products/view/Stare.svg";
import stard from "/products/view/Stard.svg";



const Container = styled.div`
display: flex;
padding-left: 150px;
padding-top: 70px;
`;


const Details = styled.div`
font-family: "M";
font-size: 28px;
font-weight: 700;
& span{

  display: flex;
  color: #46A358;
  font-size: 22px;
  margin-top: 20px;
}`;

const Column = styled.div`
display: inline;
width: 100px; 
& img{
  padding-bottom: 40px;
}`;
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
const Review = styled.div`
display: flex;
& p{
  
  font-weight: 300;
}
`;

const Stars = styled.div`
display: flex;
`;

const Buy = styled.div`

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
        <Buy>
        <div>
          <Name>Barberton Daisy</Name>
          <span><p>$</p><Price>190.00</Price></span>
        </div>
        <Review>
          <Stars>
            <img src={stare} alt="" />
            <img src={stare} alt="" />
            <img src={stare} alt="" />
            <img src={stare} alt="" />
            <img src={stard} alt="" />
          </Stars>
          <p>19 Customer Review</p>
        </Review>
        </Buy>


      </Details>
    </Container>
  )
}

export default View