const Counter = props => {
  return (
    <div className='card'>
      <button onClick={() => props.pizza(count => count + 1)}>count is {props.count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Counter
