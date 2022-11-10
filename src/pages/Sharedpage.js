import React from 'react'
import { useEffect, useState } from "react";
import List from '../components/formlist';
import './home.css'


const Sharedpage = () => {


    const [forms, setForms] = useState(null)

  useEffect(() => {
    fetch('https://json-4s60be2d6-aanchal2057.vercel.app/formquestion')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setForms(data);
      })
  }, [])
    return (
        <div   >
            
            <div className='col-12  mt-5'  >
                <h2 className='text-center'>Survey JS Form  list</h2>

               
                {forms && <List forms={forms} />}
            </div>X
            
          


        </div>
    )
}

export default Sharedpage