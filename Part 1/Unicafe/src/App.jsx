import { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    const newAverage = (newGood - bad) / newTotal;
    const newPositive = (newGood / newTotal) * 100;
  
    setGood(newGood);
    setTotal(newTotal);
    setAverage(newAverage);
    setPositive(newPositive);
  }
  
  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    const newTotal = total + 1;
    const newAverage = (good - bad) / newTotal;
    const newPositive = (good / newTotal) * 100;
  
    setNeutral(newNeutral);
    setTotal(newTotal);
    setAverage(newAverage);
    setPositive(newPositive);
  }

  const handleBad = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    const newAverage = (good - newBad) / newTotal;
    const newPositive = (good / newTotal) * 100;
  
    setBad(newBad);
    setTotal(newTotal);
    setAverage(newAverage);
    setPositive(newPositive);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App