import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Bottom from './component/Bottom'
import Question from './component/Question'
import Topbar from './component/Topbar'
import data from './Data'
import Pagination from './component/Pagination';
// https://dilipkumarsuthar.netlify.app/
function App() {
  const [page,setpage]=useState(0);
  return (
    <>
    <div className='container'>
      <div className='main'>
       <Topbar index={page}/>
       <Question index={page}/>
        <Bottom page={page} setpage={setpage}/>
        <Pagination page={page} setpage={setpage}/>
      </div>
     </div>
    </>
  );
}

export default App;
