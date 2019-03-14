import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 2px solid gray;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: blue;
  }
`;

export default Input;
