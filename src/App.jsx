import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter count={count} pizza={setCount} />
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <p>{count}</p>
      <Form />
    </>
  )
}

export default App
