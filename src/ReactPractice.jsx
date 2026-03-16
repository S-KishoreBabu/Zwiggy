import React, { useReducer, useState } from 'react'

const ReactPractice = () => {
    const [grandParentColor,setGrandParentColor] = useState("coral");
    const [parentColor,setParentColor] = useState("lightyellow");
    const [childColor,setChildColor] = useState("lightgreen");
    const [numCount,reducer] = useReducer(dispatch,0);
    const reducer = () =>{
        
    }
    let count = 0;
    const grandParent = ()=>{
        console.log("grandParent");
        setTimeout(()=>{
            setGrandParentColor("red");
        },count*600);
        count++;
    }
    const parent = ()=>{
        console.log("parent");
        setTimeout(()=>{
            setParentColor("yellow");
        },count*600);
        count++;
    }
    const child = ()=>{
        console.log("child");
        setTimeout(()=>{
            setChildColor("green");
        },count*600);
        count++;
    }

    const grandParentStyle = {
        backgroundColor : grandParentColor
    }
    const parentStyle = {
        backgroundColor : parentColor
    }
    const childStyle = {
        backgroundColor : childColor
    }

    const reset = () => {
        setGrandParentColor("coral");
        setParentColor("lightyellow");
        setChildColor("lightgreen");
    }

  return (
    <div className='p-10'>
        <h1>event Bubling & event capturing</h1>
        <div id="grandParent" style={grandParentStyle} className='border z-20  backdrop-blur-2xl rounded-[50%] shadow-2xl w-100 h-100 flex justify-center items-center ' onClickCapture={grandParent}>
            <div id="parent" style={parentStyle} className='border  backdrop-blur-2xl rounded-[50%] shadow-2xl  w-80 h-80 flex justify-center items-center ' onClickCapture={parent}>
                <div id="child" style={childStyle} className='border backdrop-blur-2xl rounded-[50%] shadow-2xl w-50 h-50 flex justify-center items-center ' onClickCapture={child}>

                </div>
            </div>
        </div>
        <button id='resetbtn' onClick={reset} className='mt-8 px-6 py-3 bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95'>
            Reset Colors
        </button>
        <div className='p-20'>
            <h1>Count : {numCount} by useReducer hook</h1>
            <button className='px-4 py-1 border font-extrabold'>+</button>
            <button className='px-4 py-1 border font-extrabold'>-</button>
            <button className='px-4 py-1 border font-extrabold'>reset</button>
        </div>
    </div>
  )
}

export default ReactPractice