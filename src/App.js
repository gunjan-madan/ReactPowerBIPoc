import "./App.css";
import PowerBI from "./Components/powerbi_poc";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React PowerBI Demo Application</h1>
        <p>This is a demo of embeding PowerBI Reports</p>
      </div>
      <PowerBI height="100%"></PowerBI>
    </div>
  );
}

export default App;
