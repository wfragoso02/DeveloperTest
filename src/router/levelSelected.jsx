import React from 'react';


class Level extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(

            <div>
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