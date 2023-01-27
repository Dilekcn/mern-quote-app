import QuoteCard from "./components/QuoteCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container bg-light p-0">
      <Navbar />
      <QuoteCard />
    </div>
  );
}

export default App;
