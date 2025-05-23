import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { SliderItems } from "../../data";
import { mobile } from "../../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;

   ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease;
   transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
   width: 50vw;
   height: 50vh;
   display: flex;
   align-items: center;
   background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
   height: 50%;
   flex: 1;
`;

const Image = styled.img`
   height: 80%;
`;

const InfoContainer = styled.div`
   padding: 50px;
   flex: 1;
`;

const Title = styled.h1`
   font-size: 60px;
`;

const Desc = styled.p`
   margin: 50px 0;
   font-size: 20px;
   font-weight: 900;
   letter-spacing: 3px;
`;

const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
`;

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: #FFF9F9;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props => props.direction === "left" && "10px"};
   right: ${props => props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
 
    useEffect(() => {
       const timer = setInterval(() => {
          setSlideIndex(prevIndex => (prevIndex < 2 ? prevIndex + 1 : 0));
       }, 5000);
       return () => clearInterval(timer);
    }, []);
 
    const handleClick = (direction) => {
       if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
       } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
       }
    };

   return (
      <Container>
         <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
         </Arrow>
         <Wrapper slideIndex={slideIndex}>
            {SliderItems.map(item => (
               <Slide bg={item.bg} key={item.id}>
                  <ImgContainer><Image src={item.img} /></ImgContainer>
                  <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>{item.desc}</Desc>
                     <Link to="/products">
                        <Button>SHOP NOW</Button>
                     </Link>
                  </InfoContainer>
               </Slide>
            ))}
         </Wrapper>
         <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
         </Arrow>
      </Container>
   );
}

export default Slider;
