import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;

const Statistic = ({text, value, mark}) =>{
    return(
        <tr>
            <td>{text}:</td>
            <td>{value}{mark}</td>
        </tr>
    )
        
};

const Statistics = ({good, neutral, bad}) =>{
    const total = good + neutral + bad;
    const avg = Math.round(((good - bad) / total) * 100) / 100;
    const pos = Math.round(((good * 100) / total) * 10) / 10;

    return(
        <div>
            <h1>Statistics</h1>
            {total === 0 ?
            <h3>No feedback given</h3>
            :
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="ALL" value={total} />
                    <Statistic text="average" value={avg} />
                    <Statistic text="positive" value={pos} mark="%" />
                </tbody>
            </table>
            }
        </div>
    )
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Give Feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))