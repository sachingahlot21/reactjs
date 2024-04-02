import React, { useEffect } from 'react'
import TrendDiv from './TrendDiv'
function Trend() {

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/top32';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de9c729c89msh88c08711e0bf1bdp19fcb3jsn8218a092d712',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    const fetchData = async () => {

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-[100%] h-[50%] '>
            <h1 className='text-2xl text-white w-[100%] h-[15%] '>Trending</h1>
            <div className='w-[100%] h-[85%]  pt-4 flex '>
                <TrendDiv />
            </div>
        </div>
    )
}

export default Trend