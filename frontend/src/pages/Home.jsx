import React from 'react'
import Hero from '../components/Hero'
import RoomsCard from '../components/RoomsCard'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className="bg-[#232323]">
      <Hero />
      <RoomsCard />
      <Services />
    </div>
  )
}

export default Home
