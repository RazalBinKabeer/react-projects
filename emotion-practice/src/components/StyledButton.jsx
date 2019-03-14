import styled from "@emotion/styled";

const Button = styled.button`
  background: hotpink;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background: darkmagenta;
  }
`;

const StyledButton = () => {
  return <Button>Click Me!</Button>;
};

export default StyledButton;
