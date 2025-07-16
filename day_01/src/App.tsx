import React from 'react'
import ProfileCard from './components/profileCard'

const App = () => {
  return (
   <div className='flex flex-wrap justify-center items-center'>
   <ProfileCard name={'Hamza khan'} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAoGlLnyVk0VORUBv0hJGilJbEeRAEHNA1Q&s"} bio={'Learning React TS the smart way.'} title={'React Intern'}/>
   <ProfileCard name={'Mosh'} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURZKDKdH_aQ7rZr6AviiOmMFfvXL2megTaA&s"} bio={'Smart solutions,Modern tech..................'} title={'Developer'}/>
   <ProfileCard name={'M Imran'} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBwK46uDyjCZrkuxsXIg-FBeF-v3iwFON0A&s"} bio={'learning Next TS the smart way.'} title={'Next Intern'}/>
   </div>
  )
}

export default App