import { StyledHeader, Nav, Logo, Image } from "../styles/Header.styled";
import { Container } from "../styles/HeaderContainer.styled";
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Image src="./images/cover.png" alt="" />
          <div>
            <h1>We want give them a better tommorow!</h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started
            </Button>
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
