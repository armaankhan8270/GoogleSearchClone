import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import google from './download.png'

const Footer = () => {
  const [data, setdata] = useState([])
  const [searchterm, setsearchterm] = useState("success")
 
 
  const url=`https://www.googleapis.com/customsearch/v1?key=AIzaSyCVxaYbuG83qNrA_ZY3335kMrT6F5ZQZ2s&cx=3457a841d725a4cc6&q=${searchterm}`
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
    className='text-center dark:bg-gray-900 dark:text-white   p-10 mt-10 shadow-xl rounded-xl border-cyan-900'>
      <div>
       
        <div className='s flex flex-wrap justify-between space-y-6'>
        <div className='mb-5 flex bg-white rounded-full hover:shadow-lg text-black w-[800px] ml-[20%]'>
        
        <button className='text-4xl mr-5 hover:shadow-xl p-2 rounded-full ' onClick={getdata}>🔍</button>
         <input  onChange={(e)=>{
           setsearchterm(e.target.value)
          
           
           
         }}  type="text"className='bg-white w-[600px] text-black  rounded-full outline-none focus:outline:none text-2xl p-2    'placeholder='Search' name="" id="" />
         <img className='text-4xl  h-12 p-1 rounded-full' onClick={getdata} src={google} alt="" />
     </div>
        {data.map((items,ind)=>(
          <div key={ind} className="ml-[10%] hover:bg-slate-900 hover:text-white hover:rounded-lg hover:pl-10 hover:pt-10 hover:pb-10 hover:shadow-2xl  w-full">
          <h1 className='text-2xl text-start w-full'>{items.title}</h1>
        <a href={items.link} target="_blank" rel="noreferrer">
          <p className="text-sm text-start w-1/2  ">{items.snippet}</p>
          <p className="text-start  text-lg hover:underline dark:text-blue-300 text-blue-700  ">{items.link  ? items.link.substring(0, 30) : items.link}</p>
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