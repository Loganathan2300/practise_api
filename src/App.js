import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
import NameOnly from "./pages/NameOnly";
import Layout from "./components/Layout";
import EmailOnly from "./pages/EmailOnly";
import GenderOnly from "./pages/GenderOnly";
import ActiveOnly from "./pages/ActiveOnly";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/name" element={<NameOnly />} />
          <Route path="/email" element={<EmailOnly />} />
          <Route path="/gender" element={<GenderOnly />} />
          <Route path="/active" element={<ActiveOnly />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
