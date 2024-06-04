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
padding-left: 50px;
& span{

  display: flex;
  color: #46A358;
  font-size: 22px;
  margin-top: 20px;
}`;

const Line = styled.div`
  border-bottom: 1px solid #46A358;
  opacity: 0.5;
  width: 550px;
  padding-top: 10px;

`;

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
margin-top: 62px;
margin-left: 90px;
align-items: center;
& img{
height: 15px;
width: 15px;
}
& p{
  padding-left: 5px;
}
font-size: 15px;
`;

const Container_1 = styled.div`
width: 240px;
height: 60px;
`;
const Price_container = styled.div`
display: flex;
`;
const Description = styled.div`
padding-top: 15px;
font-size: 15px;

width: 570px;
line-height: 24px;

& h3{
  font-weight: 400;
}

& p {
  font-size: 14px;
  font-weight: 300;
  padding-top: 10px;
}
`;
const Size = styled.div`

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
        <Price_container>
          <Container_1>
            <Name>Barberton Daisy</Name>
            <span><p>$</p><Price>119.00</Price></span>
          </Container_1>
          <Review>
            <Stars>
              <img src={stare} alt="" />
              <img src={stare} alt="" />
              <img src={stare} alt="" />
              <img src={stare} alt="" />
              <img src={stard} alt="" />
              <p>19 Customer Review</p>
            </Stars>
          </Review>
        </Price_container>
        <Line></Line>
        <Description>
        <h3>Short Description:</h3>
        <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
        </Description>

      </Details>
    </Container>
  )
}

export default View