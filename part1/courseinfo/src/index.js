import React from 'react'
import ReactDOM from 'react-dom'

// 1.1 complete - added Header, Content, and Total components, refactored App
// 1.2 complete - added Part component, refactored Content
// 1.3 complete - organized loose vars into partn objects, refactored components
// 1.4 complete - organized loose partn objects into one parts array, refactored components
// 1.5 complete - combined parts array with course var into one course object, refactored components

const Header = (props) => (
    <div>
        <h1>{props.course.name}</h1>
    </div>
)

const Content = (props) => (
    <div>
        <Part part={props.course.parts[0]} />
        <Part part={props.course.parts[1]} />
        <Part part={props.course.parts[2]} />
    </div>
)

const Part = (props) => (
    <div>
        <p>{props.part.name} {props.part.exercises}</p>
    </div>
)

const Total = (props) => (
    <div>
        <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
)

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))