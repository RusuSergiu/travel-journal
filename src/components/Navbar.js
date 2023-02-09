import React from "react"
import GlobeIcon from "../images/globe-icon.png"

export default function Navbar() {
    return(
        <nav>
            <img src = {GlobeIcon} alt = "globe-icon" className = "globe-icon" />
            <p className = "nav-text">my travel journal.</p>
        </nav>
    )
}