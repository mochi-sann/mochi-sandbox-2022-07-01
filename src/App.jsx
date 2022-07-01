import { useState } from "react";
import Loganimation from "./icon-animation-2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="mochi-icon-ani">
          <Player
            autoplay
            loop
            src={Loganimation}
            style={{ height: "900px", width: "900px" }}
          >
          </Player>
        </div>
      </header>
    </div>
  );
}

export default App;
