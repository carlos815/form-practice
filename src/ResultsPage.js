import React from 'react';
import { Link } from 'react-router-dom'


export default function ResultsPage(props) {

    const dataSent = Object.entries(props.formState).map(([key, value]) => {
        return(


            <div className='form-row'>
            <h3 style={{color:'white'}}><code>{key + ':'}</code></h3>
            <div style={{margin: '0 0 0 10px', color: 'pink'}}><code>{value}</code></div>
 
        </div>

        )
    })

    return (
        <div style={{padding: '20px 20px 100% 20px', height: '100%', backgroundColor: 'rgb(75, 74, 74)', color:'white'}}>
                        <Link to="/" style={{color:'lightblue'}}><code>Go back</code></Link>

            <h2><code>This is the data being sent 😊</code></h2>
            {dataSent}
        </div>
    )
}

