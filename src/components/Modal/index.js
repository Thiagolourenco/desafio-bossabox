import React from "react";

import { Container, Content } from "./style";

export default function Modal({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
