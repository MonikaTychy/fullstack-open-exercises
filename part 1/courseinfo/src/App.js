import React from 'react';

const Total = (props) => {
  return (
  <p>Number of exercises {props.exercisesSum}</p>
  );
}

const Part = (props) => {
 return <p>{props.part} {props.exercise}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].title} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].title} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].title} exercise={props.parts[2].exercises} />
    </div>
  );
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

export default function App() { 
    let course ='Half Stack application development'
    let parts = [
         {
            title: 'Fundamentals of React',
            exercises: 10
         },
         {
           title: 'Using props to pass data',
           exercises: 7
         },
         {
           title: 'State of a component',
           exercises: 14
         }
        ]
 
let exercisesSum = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div className="App">
      <Header course={course} />
      <Content parts={parts} />
      <Total exercisesSum={exercisesSum}/>
    </div>
  );
}



