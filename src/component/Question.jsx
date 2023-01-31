import React from 'react'
import data from '../Data'
const Question = ({index}) => {
  return (
    <div className='questionbar'>
        <h3 className='page-number'>{data[index].page}/20</h3>
        <div className='question'>
            <h2>
            {data[index].question}
            </h2>
        </div>
    </div>
  )
}

export default Question