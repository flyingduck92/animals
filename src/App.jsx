import { useState } from 'react'
import Animal from './Animal'

function App() {
  const [count, setCount] = useState(0)
  const [animals, setAnimals] = useState([])

  const getRandomAnimal = () => {
    const animal = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animal[Math.floor(Math.random() * animal.length)]
  }

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1
    })
    setAnimals([...animals, getRandomAnimal()])
  }

  const displayAnimals = animals.map((item, index) => {
    return <Animal key={index} type={item} />
  })

  return (
    <>
      <h1>Animals shown here!</h1>
      <button onClick={handleClick}>Add Animal!</button>
      <p>Total animal: {count}</p>
      {displayAnimals}
    </>
  )
}

export default App
