import React from 'react'

const Students = (props) => {
  return (
    <div>
      <div style={{backgroundColor:'pink',border:'5px solid brown',height:'400px', width:'400px', margin:'auto', textAlign:'center',color:'brown'}}>
        <h2 style={{color:'brown'}}> {props.name} </h2>
        <img src= {props.image} alt="image" height={'200px'} width={'200px'} border={'4px solid white'} />
        <h3>Roll No. : {props.roll}</h3>
        <h3>Class - BTECH CSE</h3>
      </div>
    </div>
  )
}

export default Students