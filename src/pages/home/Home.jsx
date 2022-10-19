import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'

function Home() {
  return (
    <div className="Home">

      <ProfileSide/>
      {/* <div className="profileSide">Profile</div> */}
      <div className="postSide">post</div>
      <div className="RightSide">right</div>
    </div>
  )
}

export default Home