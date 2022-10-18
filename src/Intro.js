import React from 'react'
import './Intro.css'

function Intro({info}) {
// console.log(info)
  return (
    <section className='intro'>
        {/* <div className='left'> */}
            <img src={info.avatar} alt="Avatar icon" />
        {/* </div> */}

        <div className='right'>
            <h2>{info.name}</h2>
            <p>Github: <a href={info.html_url} rel="noopener noreferrer" target='_blank'>{info.username}</a></p>
            <p>{info.bio}</p>
            <span>Followers: {info.followers}</span>
            <span>Following: {info.following}</span>
            <p>Repositories: {info.public_repos}</p>
        </div>
    </section>
  )
}

export default Intro