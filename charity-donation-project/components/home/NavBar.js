import {
  StyledHeader,
  Nav,
  Logo,
  Label,
  Input,
  Switch,
  Span
} from "../styles/NavBar.styled";
import { Container } from "../styles/NavBarContainer.styled";
import { createContext, useState } from "react";
import * as icon from "../assets/icon"


export const ThemeContext = createContext(null);

export default function Header() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" alt="" />
          <Label>
            <Span> {checked ? <icon.sun/> : <icon.moon/> }</Span>
            <Input checked={checked} type="checkbox" onChange={handleChange} />
            <Switch />
          </Label>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

