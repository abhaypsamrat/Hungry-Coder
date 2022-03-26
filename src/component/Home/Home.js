import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <img
          className="image"
          src={require("../assest/icon.png")}
          alt=""
        />
        <h5><i>&lt;Sasta Coder /&gt;</i></h5>
      
    </div>
  )
}

export default Home