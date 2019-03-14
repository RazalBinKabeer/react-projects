import StyledButton from "./StyledButton";

const App = () => {
  return (
    <div>
      <h1>Styled Button Library</h1>
      <StyledButton primary size="large">
        Primary Large Button
      </StyledButton>
      <StyledButton primary size="small">
        Primary Small Button
      </StyledButton>
      <StyledButton size="large">Secondary Large Button</StyledButton>
      <StyledButton>Secondary Small Button</StyledButton>
    </div>
  );
};

export default App;
