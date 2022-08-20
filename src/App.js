import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routees from './Components/Routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Result from './Components/Result';


function App() {
  const [Darktheme, setDarktheme] = useState(true)
  return (
    <div className={Darktheme?"bg-slate-900  text-white":"bg-white  text-black"}>
    <Link className="bg-cyan-500 p-4 hover:shadow-xl" to = '/search'>Search</Link>

    <div className=' dark:bg-gray-900   dark:text-gray-200 black min-h-screen">'>
      {/* <div className='justify-end flex'>

      <button className='bg-cyan-500 text-white p-4 rounded-lg shadow-lg justify-end' onClick={()=>{setDarktheme(!Darktheme)}}>{Darktheme?"Light":"Daark"}</button>
      </div> */}
    {/* <Navbar Darktheme={Darktheme} setDarktheme={setDarktheme}/> */}
    {/* <Result/> */}
    {/* <Routees/> */}
    <Footer/>
    </div>
   

    </div>
  );
}

export default App;
