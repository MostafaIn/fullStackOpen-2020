import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) =>{
  return <h1>{props.course}</h1>
};

const Part = (props) =>{
  return <p>{props.part.name} {props.part.exercises}</p>
};

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      {props.parts.map( (part, index) =>{
        return <div key={index}>
            < Part part={part} />
          </div>
      })}
    </div>
  )

};

const Total = (props) =>{
  const exercises = props.parts.map( part => part.exercises);
  const total = exercises.reduce( (a, b) => a + b, 0);
  console.log(total)
  return <p>Number of exercises {total}</p>
};


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))