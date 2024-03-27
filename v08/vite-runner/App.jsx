import React from "./core/React.js";

// const App = React.createElement("div", { id: "app" }, "hi-mini-react");
let count = 10
let props = { id: '11111111' }

function Counter({ num }) {

  function handleClick() {
    count++
    props = {}
    React.update()
    console.log('click')
  }
  return <div {...props}>count: {count}
    <button onClick={handleClick}>click</button>
  </div>
}

function App() {
  return (
    <div>
      hi-mini-react
      <Counter num={10}></Counter>
      {/* <Counter num={20}></Counter> */}
      {/* <CounterContainer></CounterContainer> */}
    </div>
  )
}

export default App;
