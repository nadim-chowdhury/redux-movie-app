/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import "./Home.scss";
import { fetchAsyncMovies, fetchAsyncShows } from "../movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchAsyncMovies());
      dispatch(fetchAsyncShows());
    };
  }, [dispatch]);

  return (
    <div className="home">
      <MovieListing />
    </div>
  );
};

export default Home;
