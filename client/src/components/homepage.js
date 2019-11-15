import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage = (props) => {
    const [dadjokes, setDadJokes] = useState([]);

    const fetchJokes = () => { 
        axios.get('http://localhost:3300/api/jokes')
        .then(response => setDadJokes(response.data))
        .catch(error => console.log(error.response))
    }
    
    useEffect(() => {
        fetchJokes()
    }, [])

    return (
        <div>
            <p>Legit Dad Jokes</p>
            {dadjokes.map(pun => 
                <>
                    <p>{pun.pun}</p>
                </>
            
            )}
        </div>
    )
}

export default Homepage;