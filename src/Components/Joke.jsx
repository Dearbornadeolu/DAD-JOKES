import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Joke() {
    
    
    const [joke, setJoke] = useState("initialJoke")
    useEffect(()=>{
        axios.get('https://icanhazdadjoke.com/', {headers : {Accept: 'application/json'}}).then(res => setJoke(res.data)).catch(err => console.log(err))
    }, [])

    const fetchJoke = ()=>{
        axios.get('https://icanhazdadjoke.com/', {headers : {Accept: 'application/json'}}).then(res => setJoke(res.data)).catch(err => console.log(err))
    }

    return (
        <div className='w-100 mt-4'>
            <div className="card text-center">
                <div className="card-header">
                    DAD JOKE
                </div>
                <div className="card-body" >
                    <p className="card-text">{joke.joke}</p>
                    <a  className="btn btn-primary text-white" onClick={fetchJoke}>Get another Joke</a>
                </div>
            </div>
        </div>
    )
}
