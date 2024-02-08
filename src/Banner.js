import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./Requests";
import "./Banner.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]);
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }

  return (
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <h2 className="banner_desc">
                {truncate(movie?.overview, 150)}
            </h2>
            <div className="button_container">
                <button className="banner_button_play">
                    <FaPlay /> Play
                </button>
                <button className="banner_button_info">
                    <FaInfoCircle /> More Info
                </button>
            </div>
        </div>
        <div className="banner_fadeBot"></div>
    </header>
  )
}

export default Banner;