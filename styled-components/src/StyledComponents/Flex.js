import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background: darkblue;
  }
`;

export { Button, ButtonRow };
