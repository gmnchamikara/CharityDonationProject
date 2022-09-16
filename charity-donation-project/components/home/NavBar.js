import {
  StyledHeader,
  Nav,
  Logo,
  Label,
  Input,
  Switch,
  Span,
} from "../styles/NavBar.styled";
import { Container } from "../styles/NavBarContainer.styled";
import { createContext, useState } from "react";
import * as icon from "../assets/icon";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/Theme";
import GlobalStyles from '../styles/Global'

export const ThemeContext = createContext(null);

export default function Header() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = (e) => {
    setChecked(e.target.checked);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" alt="" />
          <Label>
            <Span> {checked ? <icon.sun /> : <icon.moon />}</Span>
            <Input checked={checked} type="checkbox" onChange={toggleTheme} />
            <Switch />
          </Label>
        </Nav>
      </Container>
    </StyledHeader>
    </>
    </ThemeProvider>
  );
}
