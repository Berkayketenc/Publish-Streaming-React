import React from 'react';
import Row from '../components/row/Row';
import requests from '../components/request/requests';
import Banner from '../components/banner/Banner';

import './Home.css';

function Home() {
    return (
        <div className="Home">
            <Banner />


            <Row title="" fetchUrl={requests.fetchNextWeek} isLargeRow={true} class_name="home-first-banner"/>

            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>

            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

        </div>
    );
}

export default Home;
