import React from 'react';
import Row from '../components/row/Row';
import requests from '../components/request/requests';
import Banner from '../components/banner/Banner';

import './Home.css';

function Action() {
    return (
        <div className="Home">
            <Banner />


           

            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

            

        </div>
    );
}

export default Action;
