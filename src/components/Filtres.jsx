import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
display: flex;

width: 1200px;
height: 450px;
background-color: #F5F5F5;
border-radius: 40px;
margin-top: 20px;
`;


function Filtres() {
    return (
        <Container>
            <All_container>
                <Filters>
                <p>House Plants (33)</p>
                </Filters>
                <Filters>
                <p>Potter Plants (12)</p>
                </Filters>
                <Filters>
                <p>Seeds (64)</p>
                </Filters>
                <Filters>
                <p>Small Plants (36)</p>
                </Filters>
                <Filters>
                <p>Big Plants (15)</p>
                </Filters>  
                <Filters>
                <p>Trerrariums (35)</p>
                </Filters>  
                <Filters>
                <p>Gardening (29)</p>
                </Filters>  
                <Filters>
                <p>Accessories (40)</p>
                </Filters>  
            </All_container>
        </Container>
    )
}

export default Filtres