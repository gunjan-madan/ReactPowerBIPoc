import "./App.css";
import PowerBI from "./Components/powerbi_poc";
import logo from "./Images/pepsico_logo.png";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "25px", marginLeft: "10px" }}>
          <img src={logo} alt="" width={150} height={50}></img>
        </div>
        <div style={{ width: "80%" }}>
          <h1>Total Portfolio Optimization Demo</h1>
          <p>This is a demo of embeding PowerBI Reports</p>
        </div>
      </div>
      <PowerBI></PowerBI>
    </div>
  );
}

export default App;
