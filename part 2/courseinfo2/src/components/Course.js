import React from 'react';

const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <ul>
            {parts.map(function(part) {
                return (
                    <Part key={part.id} part={part} />
                )
            })}
        </ul>
    )
}

const Part = ({ part }) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}

const Course = ({ course }) => {
    return (
        <div className='Course'>
        <Header name={course.name} />
        <Content parts={course.parts} />
        </div>
    )
}

export default Course