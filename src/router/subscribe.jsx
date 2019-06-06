import React from 'react';
import data from '../Data/data';
import {Link} from 'react-router-dom'

export default () => {
    const levels = Object.keys(data);
    const levelsReturn = levels.map((key, idx) => {
        return(
            <li key={idx} className="subcriptionsList">
                <h1>{data[key]["name"]}</h1>
                <h3>12 Month Subscription</h3>
                <h3>${data[key]["price"]}</h3>
                <br/>
                <h6>Includes Certificate of Completion</h6>
                <h6>{data[key]["credits"]["do"]} CME Credits for DO</h6>
                <h6>{data[key]["credits"]["pa"]} CME credits for PA</h6>
                <h6>{data[key]["credits"]["nurse"]} CNE credits for Nurses</h6>
                <div className="subcriptionsSubmitContainer">
                    <Link className="subcriptionsSubmit" to={`${key}`}>SELECT</Link>
                </div>
            </li>
        )
    })
    return(
        <div className="home">
            <h1>Subscribe to Canopy Learn</h1>
            <div className="listOfLevels">
                <ul className="subcriptions">
                    {levelsReturn}
                </ul>
            </div>
        </div>
    )
}