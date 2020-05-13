import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const votesZero = new Array(props.anecdotes.length).fill(0);
    const [votes, setVotes] = useState(votesZero)

    const handleRandom = () =>{
        const rand = Math.floor(Math.random() * props.anecdotes.length);
        return setSelected(rand);
    };

    const increaseVote = () => {
        setVotes(votes.map((vote, index) => (index === selected ? vote + 1 : vote)));
    };

    const maxIndex = () => {
        let maxVote = 0;
        let maxIndex = 0;
        votes.forEach((vote, index) => {
            if (vote > maxVote) {
                maxVote = vote;
                maxIndex = index;
            }
        });
        return maxIndex;
    };

  return (
    <div>
        <h3>{props.anecdotes[selected]}</h3>
        <h4>has {votes[selected]} votes</h4>
        <button onClick={increaseVote}>vote</button>
        <button onClick={handleRandom}>next anecdotes</button>
        <h3>Anecdote with most votes</h3>
		<p>{props.anecdotes[maxIndex()]}</p>
		<p>has {votes[maxIndex()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)