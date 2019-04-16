import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: blue;
`;

const HelloWorld = () => {
  return <StyledH1>Hello there World!</StyledH1>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
