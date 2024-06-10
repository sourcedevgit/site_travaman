import React from 'react'
import styled from 'styled-components';

import Card from './basket_card';

const Container = styled.div`

padding-left: 100px;
padding-top: 70px;
`;

const Header = styled.div`
display: grid;
grid-template-columns: 500px 1fr ;
& div{
   
}
 & span{
    display: grid;
    grid-template-columns: 200px 200px 200px;
 }
& p{

}
`;
const Container_Product = styled.div`

`;



function Products() {
    return (
        <Container>
            <Header>
                <div>Products</div> <span><p>Price</p> <p>Quantity</p> <p>Total</p></span>
            </Header>
            <Container_Product>
               <Card></Card>
            </Container_Product>
        </Container>
    )
}

export default Products