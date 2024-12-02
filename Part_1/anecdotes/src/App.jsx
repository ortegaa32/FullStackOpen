import { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getNextAnecdote = () => {
    const index = getRandomInt(0, anecdotes.length - 1)
    setSelected(index)
  }

  const castVote  = (selected) => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const maxVoteIndex = votes.indexOf(Math.max(...votes));
  const maxVoteAnecdote = anecdotes[maxVoteIndex];

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <button onClick={() => castVote(selected)}>vote</button>
      <button onClick={() => getNextAnecdote()}>next anecdote</button>

      
      <h2>Anecdote with the Most Votes</h2>
      {maxVoteAnecdote}
      <br></br>
      has {votes[maxVoteIndex]} votes
    </div>
  )
}

export default App