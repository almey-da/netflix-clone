import React from "react";
import "./App.css";
import requests from "./Requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import Preloader from "./Preloader";

function App() {
  return (
    <>
    <Preloader />

    <div className="app">
      <Nav />
      <Banner />

      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending}
        isLargeRow 
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Star Wars Collection" fetchUrl={requests.fetchStarWarsMoviesAndSeries}  />
      <Row title="Doctor Who Collection" fetchUrl={requests.fetchDoctorWhoSeries}  />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Sci-Fi Movies" fetchUrl={requests.fetchSciFiMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
    </>
  );
}

export default App;
