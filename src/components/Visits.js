import React from "react"
import LocationIcon from "../images/location-icon.png"

export default function Visits(props) {
    return (
        <div className = "visit">
            <img src = {props.imageUrl} alt = "visited-pic" className = "visited-pic" />
            <div className = "pic-description">
                <div className = "location-row">
                    <img src = {LocationIcon} alt = "location-icon" className = "location-icon" />
                    <h5 className = "location-text">{props.location.toUpperCase()}</h5>
                    <a href = {props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className = "location-details">
                    <h2>{props.title}</h2>
                    <p className = "date-text">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}