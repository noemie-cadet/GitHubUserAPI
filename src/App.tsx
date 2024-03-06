import { StyledEngineProvider } from "@mui/material";
import { Home } from "./components/home";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="w-full min-h-[100vh] bg-[#010409]">
        <Home />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
