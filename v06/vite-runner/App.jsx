import React from "./core/React.js";

// const App = React.createElement("div", { id: "app" }, "hi-mini-react");
function Counter({ num }) {
  return <div>count: {num}</div>
}

function CounterContainer() {
  return <Counter></Counter>
}

// const App = (
//   <div>
//     hi-mini-react12<Counter></Counter>
//   </div>
// );
function App() {
  return (
    <div>
      hi-mini-react
      <Counter num={10}></Counter>
      <Counter num={20}></Counter>
      {/* <CounterContainer></CounterContainer> */}
    </div>
  )
}

export default App;
