import React from 'react';
import styled from 'styled-components';
import {mobile} from "../../responsive";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
const Container=styled.div`
 flex:1
 margin:3px;
 height:70vh;
 min-width:320px;
 position:relative;
 margin:30px;

    ${mobile({height:"30vh"})}
`;



const Image=styled.img`
 width:99%;
 height:99%;
 object-fit:cover;

  ${mobile({height:"30vh"})}

`;

const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const Title=styled.h1`
color:white;
margin:20px;


`;

const Button=styled.button`
border:none;
padding:10px;
margin-left:100px;
align-self:center;
color:gray;
background-color:white;
cursor:pointer;
font-weight:600;

`


 function CategoryItem({items}) {
  return (
    <Container>

        <Image src={items.img}/>
        <Info>
           <Title>{items.title}</Title>
           <Link to={`/products/${items.cat}`}>
             <Button>SHOP NOW</Button>
           </Link>
        </Info>

    </Container>
  );
}

export default CategoryItem;