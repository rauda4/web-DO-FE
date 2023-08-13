import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./Layout/AuthPage";
import { LandingPage } from "./Layout/LandingPage";


function App() {
  return (
    <Routes>
      <Route path="/*" element={<LandingPage/>} />
      <Route path="/auth/*" element={<AuthPage/>} />
    </Routes>
  );
}

export default App;
