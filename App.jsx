import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Bella",
      type: "dog",
      soundMakes: "woof",
      age: 5,
      farmerId: 1,
      skills: [
        { id: 1, title: "Produces milk" },
        { id: 2, title: "Grazes efficiently" }
      ]
    },
    {
      id: 2,
      name: "Wooley",
      type: "sheep",
      soundMakes: "baa",
      age: 3,
      farmerId: 1,
      skills: [
        { id: 3, title: "Grows thick wool" }
      ]
    },
    {
      id: 3,
      name: "Clucky",
      type: "chicken",
      soundMakes: "cluck",
      age: 2,
      farmerId: 2,
      skills: [
        { id: 4, title: "Lays eggs daily" },
        { id: 5, title: "Early riser" }
      ]
    }
  ])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
