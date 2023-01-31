import React from 'react'

const Pagination = ({page,setpage}) => {
    const setPageandcolor=()=>{ 
        if(page<=0)
        {
            return ;
        }
        setpage((e)=>(e-1));
    }
  return (
    <div className='pagination'>
        <button onClick={setPageandcolor}>Prev</button>
        <button>Next</button>
    </div>
  )
}

export default Pagination