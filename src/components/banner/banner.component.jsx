
import { useState, useEffect } from 'react';
import axios from '../../utils/axios/axios.utils';
import requests from '../../utils/requests/requests';
import './banner.styles.scss';

const Banner = () => {

    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }

        fetchData();
    }, []);

    function truncateText(string, number) {
        return string?.length > number ? string.substr(0, number - 1) + '...' : string;
    }

    return (
        <div className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>

            <div className="banner-content">
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <p className="banner-description">
                {truncateText(movie?.overview, 150)}
                </p>
            </div>
            <div className="banner-fade-bottom" />
        </div>
    );
};

export default Banner;