import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
display: flex;

width: 310px;
height: 774px;
background-color: #F5F5F5;
border-radius: 30px;
margin-top: 47px;
margin-left: 180px;

`;
const Filter = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
font-size: 15px;
line-height: 50px;
padding-left:30px;

& span {
        color: #46A358;
        font-weight: 600;
        padding-left: 90px;
    }
`;

const All_container = styled.div`

`;

const Filter_header = styled.div`
font-weight: 700;
padding-left:18px;
padding-top:14px;
`;

const Wrapper_header = styled.div`
font-weight: 700;
padding-left:18px;
padding-top:14px;
`;

const Wrapper = styled.div`

display: flex;
font-size: 15px;
line-height: 50px;
padding-left:30px;

& span {
        color: #46A358;
        font-weight: 600;
        margin-left:10px;
    }
`;




function Filtres() {
    return (
        <Container>
            <All_container>
                <Filter_header>
                    <p>Categories</p>
                </Filter_header>
                <Filter>
                    <p>House Plants </p><span>(33)</span>
                </Filter>
                <Filter>
                    <p>Potter Plants </p><span>(12)</span>
                </Filter>
                <Filter>
                    <p>Seeds </p><span>(64)</span>
                </Filter>
                <Filter>
                    <p>Small Plants </p><span>(36)</span>
                </Filter>
                <Filter>
                    <p>Big Plants </p><span>(15)</span>
                </Filter>
                <Filter>
                    <p>Trerrariums </p><span>(35)</span>
                </Filter>
                <Filter>
                    <p>Gardening </p><span>(29)</span>
                </Filter>
                <Filter>
                    <p>Accessories </p><span>(40)</span>
                </Filter>
                <Wrapper_header>
                    <p>Price Range</p>
                </Wrapper_header>
                <Wrapper>
                    <p>Price:</p> <span>$39 - $1230</span>


                </Wrapper>
            </All_container>


        </Container>
    )
}

export default Filtres