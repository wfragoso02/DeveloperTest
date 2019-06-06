import React from 'react';
import data from '../Data/data';


class Level extends React.Component{


    render(){
        const level = data[this.props.match.params.level]
        return(

            <div>
                name: {level.name}
                <br/>
                price: ${level.price}
                <br/>
                DO: {level.credits.do}
                <br/>
                Pa: {level.credits.pa}
                <br/>
                Nurse: {level.credits.nurse}
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <h1>Payment Information</h1>
                    <input type="text"/>
                    <input type="text"/>
                    <h1>Expiration Date</h1>
                    <div>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit" name="purchase"/>
                </form>
            </div>
        )
    }
}

export default Level;