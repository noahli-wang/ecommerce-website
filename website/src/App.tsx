import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketplacePage from "./Pages/Marketplace/Marketplace";
import SignupPage from "./Pages/SignIn/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
