import styled from "styled-components";

export const StyledBox = styled.div `
   box-shadow: 0 4px 8px 0 rgba(165, 78, 78, 0.2);
    border-radius: 15px; /* 5px rounded corners */
    position: relative;
width: 300px;
height: 350px;


img {
  position: absolute;
width: 280px;
height: 170px;
left: 10px;
top: 10px;
border-radius: 10px;
}

h1 {
  position: absolute;
width: 70px;
height: 19px;
left: 20px;
top: 200px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #000000;
}

p {
  position: absolute;
width: 260px;
height: 40px;
left: 20px;
top: 239px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
color: gray;
}
`
