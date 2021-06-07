import React, { useState, useEffect } from "react";
import axios from "../axioss/axios";
import "./Row.css";
import { Link } from "react-router-dom";

// const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, class_name }) {
  const [movies, setMovies] = useState([]);

  //belirli bir koşul değişkenine göre çalışan bir kod parçası
  useEffect(() => {
    //if[] satır yüklendiğinde bir kez çalıştır ve bir daha çalıştırma
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setMovies(request.data);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(title);
  // let pageUrl =
  //   title == "Top Rated" || "Comedy Movies" ? "DetailTopRated" : title == "Horror Movies" ||  "Trending Now" || "Romance Movies" || "Documentaries" ? "DetailTrending" : "Detail";
  let pageUrl =
    title == "Top Rated"
      ? "DetailTopRated"
      : title == "Comedy Movies"
      ? "DetailTopRated"
      : title == "Horror Movies"
      ? "DetailTrending"
      : title == "Trending Now"
      ? "DetailTrending"
      : title == "Romance Movies"
      ? "DetailTrending"
      : title == "Romance Movies"
      ? "DetailTrending"
      : title == "Documentaries"
      ? "DetailTrending"
      : "Detail";
  console.log(pageUrl);
  return (
    <div className={class_name ? "row "+class_name : "row"}>
      <h2>{title}</h2>
      <div className="home-movie-list">
        {movies.map((movie) => (
          <Link to={`/${pageUrl}/${movie.id}`}>
            <div className="row_posters">
              <img
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} //bunun classı row_poster ama islargerow olursa bunun adı row_pasterlarge olarak css de güncellenir
                src={`${isLargeRow ? movie.img : movie.img}`}
                alt={movie.name}
              />{" "}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
