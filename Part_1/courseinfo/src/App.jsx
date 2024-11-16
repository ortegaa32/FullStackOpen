
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.parts.part} {props.parts.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack Application Development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using Props to Pass Data"
  const exercises2 = 7
  const part3 = "State of Component"
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3

  const parts = [
    {"part": part1, "exercises": exercises1},
    {"part": part2, "exercises": exercises2},
    {"part": part3, "exercises": exercises3}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default App
