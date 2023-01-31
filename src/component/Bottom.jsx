import React from 'react'
import { useRef } from 'react';
// Strongly DisagreeDisagreeDisagreeNeutralNeutralAgreeAgreeStrongly AgreeStrongly Agree
const Bottom = ({ page, setpage, setprevpage }) => {
    const counter = useRef(null);
    const state=useRef();
    const setPageandcolor = () => {
        if (page >= 19) {
            return;
        }
        setpage((e) => (e + 1));
    }
    const action = (i) => {
        console.log(i);
        let nums=Array.from(state.current.children);
        if(i===1)
        {
            nums[0].classList.add("id_1");
            nums[1].classList.add("circle-active");
            setTimeout(()=>{
                nums[0].classList.remove("id_1");
                nums[1].classList.remove("circle-active");
                // nums[0].classList.remove("circle-active");
            },500);
        }
        if(i===2)
        {
            nums[1].classList.add("circle-active");
            nums[2].classList.add("circle-active");
            nums[0].classList.add("id_2");
            setTimeout(()=>{
                nums[0].classList.remove("id_2");
                nums[1].classList.remove("circle-active");
            nums[2].classList.remove("circle-active");
            },800);
        }
        if(i===3)
        {
            nums[1].classList.add("circle-active");
            nums[2].classList.add("circle-active");
            nums[3].classList.add("circle-active");
           
            nums[0].classList.add("id_3");
            setTimeout(()=>{
                nums[0].classList.remove("id_3");
                nums[1].classList.remove("circle-active");
            nums[2].classList.remove("circle-active");
            nums[3].classList.remove("circle-active");
            },800);
        }
        if(i===4)
        {
            nums[1].classList.add("circle-active");
            nums[2].classList.add("circle-active");
            nums[3].classList.add("circle-active");
            nums[4].classList.add("circle-active");
            nums[0].classList.add("id_4");
            setTimeout(()=>{
                nums[0].classList.remove("id_4");
                nums[1].classList.remove("circle-active");
            nums[2].classList.remove("circle-active");
            nums[3].classList.remove("circle-active");
            nums[4].classList.remove("circle-active");
            },800);
        }
        if(i===5)
        {
            nums[1].classList.add("circle-active");
            nums[2].classList.add("circle-active");
            nums[3].classList.add("circle-active");
            nums[4].classList.add("circle-active");
            nums[5].classList.add("circle-active");
            nums[0].classList.add("id_5");
            setTimeout(()=>{
                nums[0].classList.remove("id_5");
                nums[1].classList.remove("circle-active");
            nums[2].classList.remove("circle-active");
            nums[3].classList.remove("circle-active");
            nums[4].classList.remove("circle-active");
            nums[5].classList.remove("circle-active");
            },800);
        }
    }
    return (
        <>
            <div className='bottombar' onClick={setPageandcolor}>
                <div className="progress-container" ref={state}>
                    <div className="progress"></div>
                    <div className="circle" id="1" onClick={()=>action(1)} ></div>
                    <div className="circle" id="2" onClick={()=>action(2)}></div>
                    <div className="circle " id="3" onClick={()=>action(3)}></div>
                    <div className="circle " id="4" onClick={()=>action(4)}></div>
                    <div className="circle " id="5" onClick={()=>action(5)}></div>
                </div>
            </div>
        </>
    )
}

export default Bottom