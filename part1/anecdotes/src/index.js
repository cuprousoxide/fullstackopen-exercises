import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const [wtf, setWtf] = useState(0) // i cannot figure out why, but the vote count does not re-render unless i'm also updating a second state
    const [mostVoted, setMostVoted] = useState("")

    const vote = () => {
        const newVotes = votes
        newVotes[selected] += 1
        setVotes(newVotes)
        setWtf(wtf + 1) // disable this and see what happens
        // debugger
        setMostVoted(anecdotes[votes.indexOf(Math.max(...votes))])
    }

    const newAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    // const findMostVoted = () => {
    //     setMostVoted(anecdotes[votes.indexOf(Math.max(votes))])
    // }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <br></br>
            <p>has {votes[selected]} votes</p>
            <Button text='vote' onClick={vote} />
            <Button text='next anecdote' onClick={newAnecdote} />
            <h1>Anecdote with most votes</h1>
            <MostVotedAnecdote mostVoted={mostVoted} />
        </div>
    )
}

const Button = ({text, onClick}) => (
    <button onClick={onClick} >{text}</button>
)

const MostVotedAnecdote = ({mostVoted}) => (
    <p>{mostVoted}</p>
)

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