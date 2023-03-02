import { useEffect, useState } from 'react';
import axios from '../../utils/axios/axios.utils';
import './section.styles.scss';

const Section = ({ title, fetchUrl, isLargeSection = false }) => {

    const [ movies, setMovies ] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchMovies(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchMovies();
    },[fetchUrl]);

    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className='section-posters'>
                {movies && movies.map((movie) => (
                    <img 
                    key={movie.id} 
                    className={`section-poster ${isLargeSection && "section-poster-large"}`} 
                    src={`${base_url}${
                        isLargeSection ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                ))}
            </div>
        </div>
    );
};

export default Section;