
import React from 'react';
import styled from 'styled-components'

const Container=styled.div`
   height:30px;
   background-color:orange;
   color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:14px;
   font-weight:500;

`

 function Announcement() {
  return (
    <Container>
      Super Deal! Buy 2 Items – Get 10% Off.
    </Container>
  );
}

export default Announcement;