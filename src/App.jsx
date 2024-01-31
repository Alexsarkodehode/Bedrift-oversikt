import React from 'react'
import './App.css'
import {useState, useEffect} from 'react'
import FetchData from '../src/Hooks/FetchData.jsx'
import DisplayData from '../src/Components/DisplayData.jsx'



function App(){
    return(
    <>
    <DisplayData />
    </>
    )
}

export default App