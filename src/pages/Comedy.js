import React from 'react';
import Row from '../components/row/Row';
import requests from '../components/request/requests';
import Banner from '../components/banner/Banner';

import './Home.css';

function Comedy() {
    return (
        <div className="Home">
            <Banner />


           

            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

            

        </div>
    );
}

export default Comedy;
