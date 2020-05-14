import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({courseName}) =>{
  return <h1>{courseName}</h1>
};

const Part = ({part}) =>{
  return <p>{part.name} {part.exercises}</p>
};

const Content = ({parts}) =>{
  console.log(parts)
  return(
    <div>
      {parts.map( (part) =>{
        return <div key={part.id}>
            <Part part={part} />
          </div>
      })}
    </div>
  )
};

const Total = ({exercises}) =>{
  const total = exercises.reduce( (a, b) => a + b, 0);
  console.log(total)
  return <h4>Number of exercises {total}</h4>
};

const Course = ({course}) =>{
  const exercises = course.parts.map( part => part.exercises);

  return(
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total exercises={exercises} />
    </div>
  )
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))