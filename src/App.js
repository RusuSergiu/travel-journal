import React from "react"
import "./style.css"
import Navbar from "./components/Navbar"
import Visits from "./components/Visits"
import data from "./data"

export default function App() {
  const visited = data.map(item => {
    return (
      <Visits 
        key = {item.id}
        {...item}
      />
    )
  })


  return (
    <div className = "container" >
        <Navbar />
        <section className = "visited-list">
          {visited}
        </section>
    </div>
  )
}