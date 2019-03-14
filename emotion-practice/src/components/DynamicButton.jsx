import styled from "@emotion/styled";

const Button = styled.button`
  background: ${({ primary }) => (primary ? "blue" : "gray")};

  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "darkblue" : "darkgray")};
  }
`;

const DynamicButton = ({ primary, children }) => {
  return <Button primary={primary}>{children}</Button>;
};

export default DynamicButton;
