const Day2 = () => {
  return (
    <div>
      <Card 
        title="React Basics" 
        description="Learn about components, JSX, and props." 
      />

      <Card 
        title="React State" 
        description="Understand how to manage state in React." 
      />

      <Card 
         title="React Events" 
         description="Handle user interactions like clicks and input." 
      />


      <UserCard />
    </div>
  )
}

export default Day2;


// "Part One"
// "Props & Component Reusability"
import React from 'react';
const Card = ({title, description}) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem 0' }}>
      <h2>Title: {title}</h2>
      <p>Desc: {description}</p>
    </div>
  )
}



// "Part Two"
//  "Dynamic Profile Cards using Props"
//  "Passing Object Data as Props"
//  "Rendering Multiple Components with Map()"
import personData from '../api/dayTwoData.json'
const UserCard = () => {
  return(
    <div>
      {personData.map((currentElem) => (
        <div style={boxStyles}>
          <p><strong>Name: </strong>{currentElem.name}</p>
          <p><strong>Age: </strong>{currentElem.age}</p>
          <p><strong>Education: </strong>{currentElem.education}</p>
          <p><strong>Passion: </strong>{currentElem.passion}</p>
          <p><strong>Profession: </strong>{currentElem.profession}</p>
          <p><strong>Hobbies: </strong>{currentElem.hobbies}</p>
          <p><strong>Location: </strong>{currentElem.location}</p>
          </div>
      ))}
    </div>
  )
}

// "Styles:"
const boxStyles = {
  width: '300px',
  height: 'auto',
  padding: '16px',
  margin: '60px',
  boxShadow: '2px 2px 2px grey'
}