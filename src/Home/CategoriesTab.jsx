import React from 'react';
import {categories} from "../../data";
import styled from 'styled-components';
import CategoryItem from "../Categories/CategoryItem";
import {mobile} from "../../responsive";

const Container=styled.div`

   display:flex;
   padding:20px;
   flex-wrap:wrap;
   justify-content:space-between;
   

    ${mobile({padding:"0px", flexDirection:"column"})}

`;

 function CategoriesTab() {
  return (
    <Container>
    {categories.map((item)=>(
      <CategoryItem
      items={item}
      key={item.id}/>
    ))}
    </Container>
  );
}

export default CategoriesTab;
