import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Landing2 from "./pages/Landing2";
import Payment from "./pages/Payment";
import SelectPayment from "./pages/SelectPayment";
import AddPayment from "./pages/AddPayment";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Payment/SelectPayment" element={<SelectPayment />} />
          <Route
            path="/Payment/SelectPayment/AddPayment"
            element={<AddPayment />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
