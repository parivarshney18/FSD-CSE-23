import React from 'react'
import Student from './component/Student'

const App = () => {
  return (
    <div>
      <h1>STUDENT RECORD</h1>
      <div style={{display:'flex', gap:'20px'}}>
         <Student name ="Billu1" roll="201" image="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"/>
        <br/>
        <Student name="Billu2" roll="202" image="https://wallpapers.com/images/hd/cute-cat-aesthetic-mackerel-tabby-91f3g48cxsxuratn.jpg"/>
      </div>
    </div>
  )
}

export default App