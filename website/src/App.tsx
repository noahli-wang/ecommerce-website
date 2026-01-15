import { BrowserRouter, Routes, Route} from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";


//Sets up the routing for the marketplace page
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
