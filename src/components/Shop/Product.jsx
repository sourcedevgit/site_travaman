import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

`;

const Product_c = styled.div`
color:  #46A358;
font-size:20px;
padding-left:140px;
`;

const Reviews = styled.div`
display: flex;
font-size: 20px;
padding-left: 170px;
& p {
    padding-right: 20px;
}

`;

const Line = styled.div`
border-bottom: 4px solid #46A358;
width: 180px;
padding-right: 80px;
`;

const Container_t = styled.div`

`;

const Text1 = styled.div`
& p {

}
`;

const Text2 = styled.div`
& p {
    
}
`;

const Text3 = styled.div`
& p {
    
}
`;

const Text4 = styled.div`
& p {
    
}
`;

const Text5 = styled.div`
& p {
    
}
`;

const Text6 = styled.div`
& p {
    
}
`;

const Text7 = styled.div`
& p {
    
}
`;

const Text8 = styled.div`
& p {
    
}
`;


function Product() {
    return (
        <Container>
            <Product_c>
            </Product_c>
            <Reviews>
                <p>Description</p>
                <p>Reviews (19)</p>
            </Reviews>
            <Line>
            </Line>
            <Container_t>
                <Text1><p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p></Text1>
                <Text2><p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.</p></Text2>
                <Text3><p>Living Room:</p></Text3>
                <Text4><p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Text4>
                <Text5><p>Dining Room:</p></Text5>
                <Text6><p>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p></Text6>
                <Text7><p>Office:</p></Text7>
                <Text8><p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Text8>
            </Container_t>
        </Container>
    )
}
export default Product