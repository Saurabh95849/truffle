import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <h1>hello is saurabh sihare</h1>
          <hr />
          <Demo />
          <hr />
          <Footer />
          <div>
          <input type="text" id="input"></input>
          <button type="submit" onClick='hello'> submit</button>
          </div>
          
        </div>
        
      </div>
    </EthProvider>
  );
}

export default App;
