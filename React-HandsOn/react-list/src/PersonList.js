import React from 'react'
import Person from './Person'

function PersonList() {
    const persons=[
        {
            id:1,
            name:'Rohan',
            age:24,
            skill:'Angular',
        },
        {
            id:2,
            name:'Karan',
            age:24,
            skill:'React',
        },
        {
            id:3,
            name:'Suren',
            age:24,
            skill:'Node',
        }

    ]
// const personList=persons.map(person=><h2>I am {person.name},I am {person.age},i know {person.skill}</h2>)
const personList=persons.map(person=><Person key={person.id} person={person} />)
    return (
        <div>
            {personList}                     
        </div>
    )
}

export default PersonList
