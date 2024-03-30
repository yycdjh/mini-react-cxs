import React from "./core/React.js";

function Foo() {
  console.log('re run foo')
  const [count, setCount] = React.useState(10)
  const [bar, setBar] = React.useState('bar')

  function handleClick() {
    setCount((c) => c + 1)
    // setBar((b) => b + 'bar')
    setBar(() => 'bar')

  }

  React.useEffect(() => {
    console.log('init')
    return () => {
      console.log('cleanup 0')
    }
  }, [])

  React.useEffect(() => {
    console.log('update', count)
    return () => {
      console.log('cleanup 1')
    }
  }, [count])

  React.useEffect(() => {
    console.log('update', count)
    return () => {
      console.log('cleanup 2')
    }
  }, [count])
  return (
    <div>
      <h1>foo</h1>
      {count}
      <div></div>
      {bar}
      <div></div>

      <button onClick={handleClick}>click</button>
    </div>
  )
}


function App() {
  function handleClick() {
  }
  return (
    <div>
      hi-mini-react
      <button onClick={handleClick}>click</button>

      <Foo></Foo>
    </div>
  )
}

export default App;
