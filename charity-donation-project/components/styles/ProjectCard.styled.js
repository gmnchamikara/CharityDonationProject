import styled, { css } from "styled-components";

// Helper function to convert pixels to rems
const remy = (px) => `${px / 16}rem`;

// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return;

  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};

export const LayoutWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  // Fix for applying proper box-sizing
  html:not(&) {
    box-sizing: border-box;

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body:not(&) {
    font: 16px / 1.618 Arial, Verdana, sans-serif;
  }
`;

// Grid container
export const GridContainer = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`;

// Grid row
export const GridRow = styled.div`
  margin-right: ${remy(-50)};
  margin-left: ${remy(-50)};
  display: flex;
  flex-wrap: wrap;
`;

// Grid columns
export const GridColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};



  // Columns for mobile
  ${({ xs }) => (xs ? getFlex(xs) : "flex: 0 0 100%")};
  ${({ xs }) => (xs ? getWidth(xs) : "width: 100%")};

  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`;

// Flipping card
export const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: ${remy(280)};

 
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
  padding-top: 5px;

  }
`;

export const CardFront = styled.div`
  font-weight: bold;
  text-align: center;
  
  border: 2px solid palevioletred;
  border-radius: 3px;

  width: 350px;
  margin-left -10px;
`
export const CardImage = styled.img`

  width: 440px;
  height: 200px;
  padding-bottom: 
  margin-left: -40px;
`
export const CardTitle = styled.h2`
  font-size: ${remy(21)};
`






export const Container = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: blue;
  width: ${({ percent }) => percent}%;
`;


export const Amount = styled(BaseBox)`
margin-top: 20px;
margin-left: -40px;
margin-bottom: 20px;
font-size: ${remy(21)};
`;





