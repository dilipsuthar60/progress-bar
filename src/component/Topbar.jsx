import React from 'react'
import { useRef } from 'react'
import data from '../Data'
import { useState } from 'react'
const Topbar = ({index,prevpage}) => {
  const state=useRef(0);
  const autoclick=()=>{
    let new_data=Array.from(state.current.children);
    let top=Math.floor(index/5);
    if(index!==0&&index%5==0)
    {
      new_data[top-1].children[1].style.color='#3f3f3f';
    }
    // new_data[top].children[0].style.backgroundColor="#8fcbd3";
    // console.log(new_data[top].children[0]);
    new_data[top].children[0].classList.add("top_bar")
    new_data[top].children[0].style.width=`${data[index].width}%`;
    new_data[top].children[1].style.color='#8fcbd3';
    if(top<=4)
    {
      new_data[top+1].children[1].style.color='#3f3f3f';
      new_data[top+1].children[0].style.width='0px';
    }
  }
  setTimeout(()=>{
    autoclick();
  },10)
  return (
    <div className='topbar' ref={state} >
        <div className='progessbar'>
            <div className='color-change'></div>
            <h2 className='topbar-title'>IDEALISTIC</h2>
        </div>
        <div className='progessbar'>

        <div className='color-change'></div>
        <h2 className='topbar-title'>DISILLUSIONED</h2>
        </div>
        <div className='progessbar'>
        <div className='color-change'></div>
        <h2 className='topbar-title'>CYNICAL</h2>
        </div>
        <div className='progessbar'>
        <div className='color-change'></div>
        <h2 className='topbar-title'>HOPEFUL</h2>
        </div>
    </div>
  )
}

export default Topbar