import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import DynamicButton from "./components/DynamicButton";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DynamicButton primary>Primary Button</DynamicButton>
      <DynamicButton>Secondary Button</DynamicButton>
    </ThemeProvider>
  );
};

export default App;
