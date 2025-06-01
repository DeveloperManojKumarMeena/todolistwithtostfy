import React, { useState } from 'react'
import Create from './component/Create'
import Read from './component/Read'

const App = () => {
const [data, setdata] = useState([{
  id:1454,
  title:"Jai Shree Ram ",
  isComplete:false
}]);
  return (
    <div className="w-screen h-screen bg-gray-700 text-stone-50 flex flex-col    md:flex-row">
      <Create data={data} setdata={setdata}/>
      <Read data={data} setdata={setdata}/>
    </div>
  )
}

export default App