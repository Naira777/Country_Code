import styled, { keyframes } from "styled-components";

const anima = keyframes` 
{
    from {
        margin-left: 50%;
       
    }

    to {
        margin-right: 0%;
      
    }

  }
`;
export const Box = styled.div`
  margin-left: 300px;
  font-size: 20px;
  color: #f0e4f0;
  @media (max-width: 768px) {
 font-size: 17px;
 margin: 50px;
   
 }
`;

export const Box1 = styled.ul`
  animation: ${anima} 1.5s;
`;
