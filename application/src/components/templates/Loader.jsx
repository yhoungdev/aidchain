"use client"
import React, {useEffect, useState} from 'react';
import './Loader.css'

const Loader = () => {
    const [Loader, setLoader] = useState(false);

    window.addEventListener('load',()=>{
      setTimeout(()=>{
        setLoader(true);
      },2000)
      console.log(121212)
    })

  return (
    <div className={(Loader)? "hidden" : "bg-white h-screen w-full fixed z-50 flex justify-center items-center" }>
        <div class="loader"></div>
    </div>
  )
}

export default Loader