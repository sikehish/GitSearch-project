import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Intro from './Intro';
import Repos from './Repos';
import { AiFillGithub } from "react-icons/ai";

function App() {

  const [info, setInfo] = useState(null);
  const [repos, setRepos] = useState(null);

  useEffect(()=>{
    
    const fetchRepos = async ()=>{
      try{
        const res= await fetch(info.repos_url);
      const data= await res.json()
      setRepos(data);
      }catch(err){
        // console.log(err);
      }
      
    }

    if(info && !(info.message)) fetchRepos();
  },[info])

  return (
    <div className="typewriter">
      <header>
      <AiFillGithub className='icon'/> <span className='icon'>GitSearch</span>
      <h1 className=''>Your go to Github repos listing page!</h1>
      <Form setInfo={setInfo} />
      </header>
      {info && <Intro info={info}/>}
      {repos && <Repos repos={repos}/>}
    </div>
  );
}

export default App;
