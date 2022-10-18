import React, { useEffect, useState } from 'react'

function Repo({repo}) {
    const {name, description, languages_url, created_at}=repo
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const [langs, setLangs] = useState([])

    useEffect(()=>{
    
        const fetchLangs = async ()=>{
          try{
            const res= await fetch(languages_url);
          const data= await res.json()
        //   console.log(data)
        //   if(Object.keys(data).length) 
          setLangs(Object.keys(data));
          }catch(err){
            // console.log(err);
          }
          
        }
    
        fetchLangs();
      },[languages_url])

  return (
    <div className='grid-item'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Created on: {new Date(created_at).toLocaleDateString(undefined,options)}</p>
        <div>
            {langs.length? 'Languages used: ': ' '}
            {langs.length? langs.map(lang=>`${lang} `): ''}
        </div>
    </div>
  )
}

export default Repo