import Modal from "./Modal";
import styled from "styled-components";

const OpenModalButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Modal Component</h1>
      <OpenModalButton onClick={() => setIsOpen(true)}>
        Open Modal
      </OpenModalButton>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default App;
