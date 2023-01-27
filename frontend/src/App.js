import QuoteCard from "./components/QuoteCard";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <QuoteCard />
    </ChakraProvider>
  );
}

export default App;
