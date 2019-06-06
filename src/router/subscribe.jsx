import React from 'react';
import data from '../Data/data';
import {Link} from 'react-router-dom'

export default () => {
    const levels = Object.keys(data);
    const levelsReturn = levels.map((key, idx) => {
        return(
            <li key={idx} className="subcriptionsList">
                <div className="title">
                    <h1 className="subcriptionsTitle">{data[key]["name"]}</h1>
                </div>
                <h3 style={{padding: '2px'}}>12 Month Subscription</h3>
                <h3>${data[key]["price"]}</h3>
                <br/>
                <h6>Includes Certificate of Completion</h6>
                <h6>{data[key]["credits"]["do"]} CME Credits for DO</h6>
                <h6>{data[key]["credits"]["pa"]} CME credits for PA</h6>
                <h6>{data[key]["credits"]["nurse"]} CNE credits for Nurses</h6>
                <Link to={`${key}`} className="subcriptionsSubmitContainer">
                    <button className="subcriptionsSubmit" >SELECT</button>
                </Link>
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