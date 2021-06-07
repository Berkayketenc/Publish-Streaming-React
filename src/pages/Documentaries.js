import React from 'react';
import Row from '../components/row/Row';
import requests from '../components/request/requests';
import Banner from '../components/banner/Banner';

import './Home.css';

function Documentaries() {
    return (
        <div className="Home">
            <Banner />


           

            <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies} />

            

        </div>
    );
}

export default Documentaries;
