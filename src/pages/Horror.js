import React from 'react';
import Row from '../components/row/Row';
import requests from '../components/request/requests';
import Banner from '../components/banner/Banner';

import './Home.css';

function Horror() {
    return (
        <div className="Home">
            <Banner />


           

            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

            

        </div>
    );
}

export default Horror;
