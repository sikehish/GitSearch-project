import React, { useEffect, useState } from 'react'

function Form({info, setInfo}) {

    const [url,setUrl] = useState('')
    const [user, setUser] = useState('');


    const submitHandler = (e) =>{
        e.preventDefault()
        setUrl(`https://api.github.com/users/${user}`)
    }

    useEffect(()=>{

        const fetchData=async ()=>{
            try{
                const res=await fetch(url);
                const data= await res.json()
               const  {avatar_url: avatar, bio,  html_url, name, public_repos, login, repos_url,followers,following} = data
               setInfo({name,username:login,avatar,bio,public_repos,repos_url,html_url, followers,following})
            }catch(err)
            {
                console.log(err)
            }finally{
                setUser('')
            }

        }

        if(url) fetchData();
        
    },[url, setInfo])



  return (
    <form className="form-structure" onSubmit={submitHandler}>
        <input type="text" placeholder='sikehish' className="search" value={user} onChange={(e)=>setUser(e.target.value)} />
        <button type="submit" className='submit-btn'>Search</button>
    </form>
  )
}

export default Form