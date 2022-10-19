import React, { useEffect, useRef, useState } from 'react';
import  ReactDOM  from 'react-dom';
import ImageFilter from './ImageFilter';

const FrontUi = () => {
    const [hideStyles,sethideStyles] = useState({ display:'none'});
    const ParentDiv = useRef();
    const totalGrid = [];
    const gridContainer =[[],[],[],[],[],[],[],[]];
    console.log('frontui rendered');

    const handleClick = () => {
        sethideStyles(hideStyles => ({...hideStyles, display:'none'}))
    }


// adding color to the grid layout for the chess board 


    const addGridBox = () => { 
        let evaluator;
        let counter = 0
        for (let i = 1; i <= 64; i++) {
            evaluator = (i%8 === 0) ? true : false;
            if (i%2 == 0) {

                totalGrid.push((counter%2 === 0) ? <div className='h-15 w-15 bg-[#B7C0D8]' key={i} id={i}></div>:<div className='h-15 w-15 bg-[#E8EDF9]' key={i} id={i}></div>)
            }
            else {
                totalGrid.push((counter%2 === 0) ? <div className='h-15 w-15 bg-[#E8EDF9]' key={i} id={i}></div>:<div className='h-15 w-15 bg-[#B7C0D8]' key={i} id={i}></div>)
            }
            if(evaluator) {
                counter +=1
            }
        }
        return totalGrid
    }

    /*

    const addPawn = (imgParent) => {
        imgParent = <img src='C:\Users\HP\Documents\react_projects\chess game\chess-game\src\images\bishop-black.svg' />

    }

    useEffect(() => {
        const childrenNodes = ParentDiv.current.childNodes;
        for(let i = 0; i < childrenNodes.length; i++) {
            if (parseInt(childrenNodes[i].id) >= 9 && parseInt(childrenNodes[i].id) <=16) {
                addPawn(childrenNodes[i])
            }
        }
    },[]);


    */
    const handleClickBtn = (e) => {
        console.log(typeof e.target.id);
    }

    return ( 

        <>
            <div className='flex flex-col items-center h-[22rem] w-[15rem] bg-[#ffffff] border-solid rounded shadow bg-blend-color-burn shadow-cyan-500/50' style={hideStyles}>
                <span className='text-center m-10'>Choose side</span>
                <div className='checkbox-btns m-5 flex justify-center items-center'>
                    <label className='btn-1 p-3'>
                        <input type='radio' defaultChecked={true} name='radio' />
                        <span> White</span>
                    </label>
                    <label className='btn-2'>
                        <input type='radio' name='radio' />
                        <span> black</span>
                    </label>
                </div>
                <button type='button' className='block bg-[#F1D3D4] m-5 p-2 rounded border-solid shadow  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' name='button' onClick={handleClick}> Continue</button>
                <button type='button' className='bg-[#F1D3D4] m-2 p-2 rounded border-solid shadow  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '  name='button'>Start new game</button>

            </div>

            <div className='grid grid-cols-8 grid-rows- 8 h-[35rem] w-[35rem] border-solid shadow bg-[#ffffff] shadow-cyan-500/50' ref={ParentDiv} onClick={handleClickBtn}>
                <ImageFilter images = {addGridBox()} />

            </div>
        </>
     );
}
 
export default FrontUi;