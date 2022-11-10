import React from 'react'
import { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom'
import App from '../components/Response';

import './home.css'


const SingleForm = () => {

const iddata = useParams();
const id = iddata.id;

    const [forms, setForms] = useState(null)
 

  useEffect(() => {
 
    fetch('https://json-zeta.vercel.app/formquestion/'+id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setForms(data);
      })
  }, [])

    return (
        <div   >
          
              {forms && <App forms={forms} />}


        </div>
    )
}

export default SingleForm