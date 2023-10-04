import React from "react";
import Rectangle from "./Rectangle.png"
import { StyledBtn, StyledBtn2 } from "./button/Button";
import { StyledBox } from "./card/CardBox";

export function App() {
  return (
    <StyledBox>
    <img src = {Rectangle} alt= "rectangle" /> 


      <h1> 
          Headline
      </h1>
      <p>
      Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
      </p>
      <StyledBtn>See more</StyledBtn>
      <StyledBtn2>Save</StyledBtn2>
    </StyledBox>

  );
}

export default App;



