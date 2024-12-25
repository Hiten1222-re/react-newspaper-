import React, { Component } from 'react'

const Spin=()=> {

    return (
      <div className="container">
      <div style={{display:"flex",justifyContent:"center"}} >
        <div class="spinner-border my-3" role="status" >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      </div>
    )
  
}
export default Spin
