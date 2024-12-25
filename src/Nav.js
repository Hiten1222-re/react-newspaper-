import React, { Component } from 'react'
import { Link } from 'react-router-dom'




const Nav=()=>{
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/business"} >Business</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/science"}>Science</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/sports"}>Sports</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/technology"}>Technology</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/health"}>Health</Link>
              </li>
             
    
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2"  id="i1" type="search" placeholder="Search" aria-label="Search"/>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                <Link class="nav-link" to={"/search"} >Search</Link>
              </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )

}

export default Nav


