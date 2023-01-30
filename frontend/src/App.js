import QuoteCard from "./components/QuoteCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AddQuote from "./components/AddQuote";
import EditQuote from "./components/EditQuote";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container bg-light p-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<QuoteCard />} />
          <Route path="/add" element={<AddQuote />} />
          <Route path="/update" element={<EditQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
