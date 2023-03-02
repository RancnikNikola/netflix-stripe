
import Navigation from '../../components/navigation/navigation.component';
import Banner from '../../components/banner/banner.component';
import Section from '../../components/section/section.component';
import requests from '../../utils/requests/requests';
import './home.styles.scss';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <Banner />
            <Section
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeSection
            />

            <Section
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
            />
            <Section
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Section
                title='Action Movies'
                fetchUrl={requests.fetchActionsMovies}
            />
            <Section
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Section
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Section
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Section
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    );
};

export default Home;