import { useState } from 'react';

const App = () => {
     const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-1234567' }
     ])
     const [newName, setNewName] = useState('')
     const [newNumber, setNewNumber] = useState('')
     
     
     const handleNumberChange = (event) => {
      event.preventDefault();
      setNewNumber(event.target.value)
     }

     const handleSubmit = (event) => {
       event.preventDefault();
       const newPerson = { name: newName, number: newNumber }

       if (persons.some(person => person.name.toLowerCase() === newName)){
        alert (`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
       } else {
         setPersons(persons.concat(newPerson))
         setNewName('');
         setNewNumber('')
       }
     }

     const handleNameChange = (event) => {
      setNewName(event.target.value)
     }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <h3>Add a new</h3>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} placeholder="enter new name" />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} placeholder="enter new number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(function(person){
        return (
          <p key={person.name}>{person.name} {person.number}</p>
        )
      })}
    </div>
  );
}

export default App;
