import React from 'react'

function Student(props) {
  return (
    <div className="Student-info">
        <h2> Name:{props.name}</h2>
        <p>Price:{props.price}</p>
      <p>Category:{props.category}</p>

    </div>
  )
}

export default Student
