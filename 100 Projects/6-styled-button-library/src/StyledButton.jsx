import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: ${(props) => (props.size === "large" ? "15px 30px" : "10px 20px")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledButton = ({ children, primary, size }) => {
  return (
    <Button primary={primary} size={size}>
      {children}
    </Button>
  );
};

export default StyledButton;
