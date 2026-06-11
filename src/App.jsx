import indiaMap from "./assets/India_states_and_union_territories_map.svg";

function App() {
  return (
    <div>
      <h1>UPSC Geography Quiz</h1>
      <img src={indiaMap} alt="India Map" style={{ width: "80%", height: "auto" }} />   
    </div>
  );
}

export default App;