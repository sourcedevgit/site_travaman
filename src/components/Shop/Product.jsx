import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

`;

const Desccription = styled.div`
font-size: 23px;
padding-left: 20px;
`;

const Line = styled.div`
  border-bottom: 4px solid #46A358;
  width: 180px;
  padding-top: 10px;

`;

const Reviews =styled.div`
`;

const Product_c = styled.div`
color:  #46A358;
font-size:20px;
padding-left:140px;
`;

function Product() {
    return (
        <Container>
            <Product_c>
                <Desccription>
                    <Line>
                    <p>Description</p>
                    </Line>
                </Desccription>
            </Product_c>
        </Container>
    )
}

export default Product