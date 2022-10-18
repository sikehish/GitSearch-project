import React from 'react'
import Repo from './Repo'


// https://api.github.com/users/QuincyLarson/repos?per_page=2&type=owner -->will be helpul in pagination
// By default the api caps the results at 30

function Repos({repos}) {
    // console.log(repos)
  return (
    <div className='grid-container'>
        {repos.map(repo=>
            <Repo key={repo.id} repo={repo}/>
        )}
    </div>
  )
}

export default Repos