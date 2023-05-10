import "./App.css";
import Courseform from "./components/Courseform";
function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        My Course list
      </h1>
      <Courseform/>
    </div>
  );
}

export default App;
