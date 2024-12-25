import React, { useState } from 'react'
import Nav from './Nav'
import News from './News'
import Heal from './Heal'
import Sci from './Sci'
import Tech from './Tech'
import {
  Routes,
  Route
} from "react-router-dom";
import Match from './Match'
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
const [progress,setprogress]=useState(0)

// abc=()=>{
//   setState({progress:30})           //was working but with some bugs
//   setTimeout(()=>{
// setState({progress:100})
//   },500)
// }

const aaa=(a)=>{
  setprogress(a)
}



  
    return (
     
      <div>
        
              <LoadingBar color="#f11946" progress={progress}  />
        <Nav />
        
        <Routes>
          <Route exact path='/' element={<News setprogress={aaa} key='g' cat="general"/>}></Route>
          <Route exact path='/business' element={<News setprogress={aaa} key='b' cat="business"/>}></Route>
          <Route exact path='/health' element={<News setprogress={aaa} key='h' cat="health"/>}></Route>
          <Route exact path='/science' element={<News setprogress={aaa} key='sc' cat="science"/>}></Route>
          <Route exact path='/technology' element={<News setprogress={aaa} key='t' cat="technology"/>}></Route>
          <Route exact path='/sports' element={<News setprogress={aaa} key='s' cat="sports"/>}></Route>
          <Route exact path='/search' element={<Match setprogress={aaa} />}></Route>
          </Routes>
      
      
      </div>

    )
  }

  export default App

