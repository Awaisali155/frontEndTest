import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Landingpage/LandingPage";
import { CreateEvent } from "./pages/createEvent/CreateEvent";
import { ShowEvent } from "./pages/eventpage/ShowEvent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/create" element={<CreateEvent />} />
        <Route exact path="/event" element={<ShowEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
