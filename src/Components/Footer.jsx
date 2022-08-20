import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Footer = () => {
  const [data, setdata] = useState([])
 
  const url='https://www.googleapis.com/customsearch/v1?key=AIzaSyCVxaYbuG83qNrA_ZY3335kMrT6F5ZQZ2s&cx=3457a841d725a4cc6&q=armaan'
  useEffect(()=>{
const getdata=async()=>{
await axios.get(url).then((res)=>{
  const Gdata=res.json()
  setdata(Gdata)
  console.log(Gdata)
}).catch((e)=>console.log(e))
getdata()
}
  },[])
  const getdata=async()=>{
    await axios.get(url).then((res)=>{
      const Gdata=res.data.items
      setdata(Gdata)
      console.log(Gdata)
    }).catch((e)=>console.log(e))
    // getdata()
    }
  return (
    <div
    className='text-center dark:bg-gray-900 dark:text-white  p-10 mt-10 shadow-xl border-t-2 border-cyan-900'>
      <div>Footer gg
        {/* {data?data.map((items,ind)=>{
          return(
            <div  key={ind} className='text-white'>
              {items.title}
            </div>
          )
        }):''} */}
        <div className='sm:px-56 flex flex-wrap justify-between space-y-6'>

        {data.map((items,ind)=>(
          <div key={ind} className="md:w-2/5 w-full">
          <a href={items.link} target="_blank" rel="noreferrer">
            <p className="text-sm">{items.link  ? items.link.substring(0, 30) : items.link}</p>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{items.title}</p>
          </a>
        </div>
        ))}
        </div>
        <button onClick={getdata}>Getdata</button>
      </div>
    </div>
  )
}

export default Footer