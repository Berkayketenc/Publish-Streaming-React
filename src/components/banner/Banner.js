import React, { useState, useEffect } from "react";
import axios from "../axioss/axios";
import requests from "../request/requests";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNextWeek);

      setMovie(
        request.data[Math.floor(Math.random() * request.data.length )]
      );
      return request;
    }
    fetchData();
  }, []);


  // console.log("bg", movie.img);
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${movie.img}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <Link to={`/Detail/${movie.id}`}>
              {" "}
              <button className="banner_button">Play</button>{" "}
            </Link>
            {/* <button className="banner_button">My List</button> */}
          </div>
        </div>

        <div className="bannerbottom"></div>
      </header>
    </div>
  );
}

export default Banner;
