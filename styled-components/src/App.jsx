import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Input from "./StyledComponents/Input";
import Card from "./StyledComponents/Card";
import { ButtonRow } from "./StyledComponents/Flex";
import Modal from "./components/Modal";
import { useState } from "react";
import Spinner from "./StyledComponents/Spinner";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darkblue;
  }
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider theme={{ primary: "blue" }}>
      <GlobalStyle />
      <Button>Click Me</Button>
      <Input type="text" placeholder="Enter your name" />
      <Card>
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
      </Card>

      <ButtonRow>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonRow>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <Button onClick={() => setIsOpen(!isOpen)}>View Modal</Button>

      <Spinner />
    </ThemeProvider>
  );
};

export default App;
