import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Landing2 from "./pages/Landing2";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
