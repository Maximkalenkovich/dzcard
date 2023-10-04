
import styled from "styled-components";

// button 1
export const StyledBtn = styled.button `
position:absolute;
width: 86px;
height: 30px;
left: 20px;
top: 298px;
border-radius: 5px;
border-color: #6baeec ;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 20px;
color: #6baeec ;

&:hover {
  background-color: #3939fc;
  color: white;
}
`
//button 2
export const StyledBtn2 = styled(StyledBtn)`
position: absolute;
width: 86px;
height: 30px;
left: 118px;
top: 298px;
`