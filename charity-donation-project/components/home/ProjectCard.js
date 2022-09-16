import React, { useState } from "react";
import {
  GridContainer,
  LayoutWrapper,
  GridRow,
  GridColumn,
  Card,
  CardFront,
  CardImage,
  CardTitle,
  Container,
  Background,
  Progress,
  Amount,
} from "../styles/ProjectCard.styled";
import content from "../home/content";

import { Button } from "../styles/DonateButton.styled";

const Layout = () => {
  const [percent, setPercent] = useState(80);

  return (
    <>
      <LayoutWrapper>
        <GridContainer>
          <GridRow>
            {content.map((item, index) => (
              <GridColumn sm="6" lg="4">
                <Card key={index}>
                  <CardFront>
                    <CardImage src={`./images/${item.image}`} />
                  </CardFront>
                  <CardTitle>{item.title}</CardTitle>

                  <div>
                    <Container>
                      <Background />
                      <Progress percent={item.Progress} />
                      <Amount>${item.amount}</Amount>
                    </Container>
                  </div>

                  <div>
                    <Button bg="#818BE9" color="#fff">
                      Donate Now
                    </Button>
                  </div>
                </Card>
              </GridColumn>
            ))}
          </GridRow>
        </GridContainer>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
