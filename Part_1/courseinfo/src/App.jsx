
const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <Part parts={props.course.parts[0]}/>
      <Part parts={props.course.parts[1]}/>
      <Part parts={props.course.parts[2]}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {

  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using Props to Pass Data",
        exercises: 7
      },
      {
        name: "State of Component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App
