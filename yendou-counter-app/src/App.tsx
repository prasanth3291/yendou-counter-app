import { ChakraProvider } from "@chakra-ui/react"; 
import Counter from "./components/Counter";
import './App.css';

function App() {
  return (
    <ChakraProvider> 
      <div className="App">
        <Counter />
      </div>
    </ChakraProvider>
  );
}

export default App;
