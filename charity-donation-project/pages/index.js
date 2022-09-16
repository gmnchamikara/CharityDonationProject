import { ThemeProvider } from 'styled-components'
import Header from '../components/home/Header'
import NavBar from '../components/home/NavBar'
import { Container } from '../components/styles/CardContainer.styled'
import GlobalStyles from '../components/styles/Global'
import { createGlobalStyle } from "styled-components";
import ProjectCard from "../components/home/ProjectCard"


const theme = {
  colors: {
    header: '#fff',
    body: '#000',
    footer: '#003333',
  },
  margin : {
    body: '20px',
  },
  mobile: '768px',
}

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Reset />
        <GlobalStyles />
        <NavBar />
        <Header />
        <Container>
          <ProjectCard />
        </Container>

      </>
    </ThemeProvider>
  );
};

export default Index;
