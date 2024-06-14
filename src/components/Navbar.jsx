import React from 'react';
import styled from 'styled-components';
import {Animated} from "react-animated-css";
import basket from "/basket.svg"; 
import trava from "/trava.svg"; 
import search from "/search.svg"; 
import Login from "/Login.svg"; 


const Container = styled.div`

`;
const Logobox = styled.div`
display: flex;
width: 100px;
`;
const Logo = styled.img`
    position: relative;
    top: -7px; 
    left: -10px;
    height: 40px;
    width: 40px;
`;

const Name = styled.div`
    font-weight: 900;
    font-size: 22px;
    color: #46A358;
`;

const InnerContainer = styled.div`
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    padding-left: 120px;
    column-gap: 10px;

`;

const ButtonContainer = styled.div`
      justify-content: center;
    display: flex;
`;

const TextLink = styled.a`
    font-size: 20px;
    margin-right: 50px;
    text-decoration: none;
    color: #3D3D3D;
    white-space: nowrap;

    &:visited {
        color: rgb(0, 0, 0);
    }
`;

const SbContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    & img {
      height: 30px;
      width: 30px;
        padding-left: 10px;
    }
`;

const LoginButton = styled.button`
    display: flex;
    margin-left: 30px;
    color: white;
    height: 35px;
    width: 100px;
    border-radius: 6px;
    border: none;
    background-color: #46A358;
    align-items: center;

    & img {
        padding: 6px;
        padding-left: 10px;
        size: 10px;
    }

    & p {
        margin: 8px;
        margin-left: 0px;
    }
`;


const ButtonLink = styled.link`

`;


export const Navbar = () => {
  return (
<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
<Container> 
      <InnerContainer>
        <Logobox>
          <Logo  src={trava} alt="Logo" />
          <Name>TRAVAMAN</Name>
        </Logobox>
        
        <ButtonContainer>
          <TextLink href="/">Home</TextLink>
          <TextLink href="/shop">Shop</TextLink>
          <TextLink href="/">Plant Care</TextLink>
          <TextLink href="/">Blogs</TextLink>
        </ButtonContainer>  
        <SbContainer>
          <img src={search} alt="Search" />
          <img src={basket} alt="Basket" />
          <LoginButton>
            <img src={Login} alt="Login" />
            <p>Login</p>
          </LoginButton>
        </SbContainer>
      </InnerContainer>
    </Container>
        </Animated>

        
    
    
  );
}

export default Navbar;