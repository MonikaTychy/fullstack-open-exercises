import React, { useState } from 'react';

const StatisticLine = (props) => {
  return <p>{props.text} {props.value}{props.sign}</p>
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = Math.round(all / 3)
  let positive = Math.round((props.good / all) * 100)

  if (all > 0) {
  return (
      <div className='Statistics'>
        <h2>Statistics:</h2>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive} sign='%'/>
      </div>
  );
  } else {
    return (
      <div className='Statistics'>
        <h2>Statistics:</h2>
         <p>No feedback given</p>
      </div>
    );
  }
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    return setGood(good + 1)
  }

  const handleNeutralClick = () => {
    return setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    return setBad(bad + 1)
  }


  return (
    <div className="App">
      <h1>Give feedback:</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />  
    </div>
  );
}

