import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import "./detail.css";
import { useInterval } from "react-interval-hook";

function Detail() {
  const [startTimer, setStartTimer] = useState(false);
  const [triggerFinishCallback, setTriggerFinishCallback] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);


  let movieName = localStorage.getItem("film");
  let movie_Title = movieName ? localStorage.getItem(movieName) : "";

  const [totalDuration, setTotalDuration] = useState({
    user: localStorage.getItem("user"),
    film: localStorage.getItem("film"),
    sure: movie_Title,
  });
  const [durationDetail, setDurationDetail] = useState([]);

  const timer = document.querySelector(".timer");
  const titleRef = useRef(null);
  let timerStart = 0;

  const { start, stop } = useInterval(
    () => {
      timer.innerHTML = timerStart++;
    },
    1000,
    {
      autoStart: false,
      immediate: false,
      selfCorrecting: false,
      onFinish: () => {
        console.log("Callback when timer is stopped");
      },
    }
  );

  // eslint-disable-next-line no-unused-expressions
  startTimer ? start() : () => stop(triggerFinishCallback);
  localStorage.getItem("sure")
    ? console.log("sure var")
    : localStorage.setItem("sure", 0);
  if (startTimer) {
    let movieTitle = titleRef.current.outerText;
    localStorage.setItem("film", movieTitle);
    setTimeout(() => {
      let storageDuration = localStorage.getItem(movieTitle);
      let numberduration = Number(storageDuration);
      let numbertimer = Number(timer.innerText);
      let duration = numberduration + numbertimer;
      localStorage.setItem(movieTitle, duration);
    }, 60000);
  }


  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://streaming-api-project.herokuapp.com/discover/api=a64gs8es8g4s65dfaef48da84/${id}`)
      .then((response) => setMovieDetail(response.data));
  }, [startTimer]);





useEffect(() => {
  setTimeout(() => {
    if(startTimer) {
        axios
        .put("https://streaming-api-project.herokuapp.com/duration", totalDuration)
        .then((response) => {
          console.log("api", response);
        });
    }
  }, 65000);
}, [startTimer])


useEffect(() => {
  axios
    .get(`https://streaming-api-project.herokuapp.com/duration`)
    .then((response) => setDurationDetail(response.data));
}, []);

const renderedList = durationDetail.sort((a, b) => parseFloat(b.sure) - parseFloat(a.sure));

  return (
    <div className="movie-detail">
      <span className="timer" style={{ display: "none" }}>
        0
      </span>
      <div className="x">
        <div
          className="movie-player"
          onClick={(e) => setStartTimer((startTimer) => !startTimer)}
        >
          <ReactPlayer
            className="video"
            id="video-player-data"
            url={movieDetail.movie}
            height="500px"
            width="700px"
            controls="true"
          />
        </div>
        <img className="img" src={movieDetail.img} />
        <div className="det">
          {" "}
          <h1 className="title" data={movieDetail.name} ref={titleRef}>
            {movieDetail.name}
          </h1>
          <p className="desp">{movieDetail.description}</p>
        </div>
        <div className="analysis">
        {renderedList.map((render, index) => (
          <div className="analysis-list" key={index}>
          <div className="name">
            <span>{render.user}</span> kullanıcısı şuanda popüler filmler arasından bunu izliyor; <font className="watch-name">
            {render.film}
          </font>
          </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
