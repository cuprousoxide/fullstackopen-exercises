import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
)

const Statistic = ({ text, stat, clicks }) => {
    if (clicks.good > 0 || clicks.neutral > 0 || clicks.bad > 0) {
        return <tr><td>{text}</td><td>{stat}</td></tr>
    }
    return (null)
}

const NoFeedback = ({ clicks }) => {
    if (clicks.good === 0 && clicks.neutral === 0 && clicks.bad === 0) {
        return <p>No feedback given</p>
    }
    return (null)
}

const App = () => {
    const [clicks, setClicks] = useState({ // putting all of the states into one object because if you still want the "no feedback given" conditional rendering, it'd a pain in the ass to send arguments to individual Statistic-components otherwise
        good: 0, neutral: 0, bad: 0 // or maybe there's another way and i'm dumb
    })

    const handleClick = (feedback) => {
        switch (feedback) {
            case 'good':
                setClicks({ ...clicks, good: clicks.good + 1 })
                break
            case 'neutral':
                setClicks({ ...clicks, neutral: clicks.neutral + 1 })
                break
            case 'bad':
                setClicks({ ...clicks, bad: clicks.bad + 1 })
                break
            default:
                return
        }
    }

    const all = () => clicks.good + clicks.neutral + clicks.bad

    const average = () => (clicks.good - clicks.bad) / all()

    const positive = () => {
        return (clicks.good / (clicks.good + clicks.neutral + clicks.bad) * 100) + '%'
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => handleClick('good')} text='good' />
            <Button onClick={() => handleClick('neutral')} text='neutral' />
            <Button onClick={() => handleClick('bad')} text='bad' />
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text='good' stat={clicks.good} clicks={clicks} />
                    <Statistic text='neutral' stat={clicks.neutral} clicks={clicks} />
                    <Statistic text='bad' stat={clicks.bad} clicks={clicks} />
                    <Statistic text='all' stat={all()} clicks={clicks} />
                    <Statistic text='average' stat={average()} clicks={clicks} />
                    <Statistic text='positive' stat={positive()} clicks={clicks} />
                </tbody>
            </table>
            <NoFeedback clicks={clicks} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))