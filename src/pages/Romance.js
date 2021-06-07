import React from 'react';
import Row from '../components/row/Row';
import requests from '../components/request/requests';
import Banner from '../components/banner/Banner';

import './Home.css';

function Romance() {
    return (
        <div className="Home">
            <Banner />


           

            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

            

        </div>
    );
}

export default Romance;
