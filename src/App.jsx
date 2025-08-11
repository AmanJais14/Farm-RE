import React from 'react'
// import hero from './assets/hero.jpeg'
import AgriLandingPage from './AgriLandingPage.jsx'


const features = [{"title": "High Returns", "desc": "Attractive IRR and cash distributions compared to traditional assets."}, {"title": "Agri-Backed", "desc": "Tangible assets — farmland & produce, with quick-commerce aligned distribution."}, {"title": "Low Entry", "desc": "Start investing with modest ticket sizes and flexible payment schedules."}];
const how_it_works = ["Choose a farm plot", "Invest via secure checkout", "Receive quarterly returns and updates"];

export default function App() {
  return (
    <AgriLandingPage/>
  )
}
