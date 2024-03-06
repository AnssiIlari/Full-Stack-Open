import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
    </div>
  )
}

const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

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
      <h1>Give feedback</h1>
      <Button handleClick={() => handleGood()} text="good" />
      <Button handleClick={() => handleNeutral()} text="neutral" />
      <Button handleClick={() => handleBad()} text="bad" />
      <Statistics {...{ good, neutral, bad, total, average, positive }} />
    </div>
  )
}

export default App