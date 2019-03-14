import styled from "styled-components";

const Spinner = styled.div`
  border: 8px solid lightgray;
  border-top: 8px solid blue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
