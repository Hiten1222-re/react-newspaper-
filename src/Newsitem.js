import React, { Component } from 'react'

const Newsitem=(props)=> {
  {
    
    return (
      <div>
        <div  className="card">
        <img src={props.f===null?"https://staticbiassets.in/thumb/msid-111770062,width-700,resizemode-4,imgsize-82148/ocean-world.jpg":props.f} class="card-img-top" alt=""/>
        <div  className="card-body">
          
            <h5  className="card-title">{props.a}</h5>
            <p  className="card-text">{props.b}</p>
            <p class="card-text"><small class=" text-danger">By {!props.d?"Unknown":props.d} on {new Date(props.e).toUTCString()}</small></p>
            <a href={props.c}  className="btn btn-sm btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
