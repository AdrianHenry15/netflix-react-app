import React from "react"
import Main from "../Main"
import Row from "../Row"
import requests from "../../Requests"

export const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
    </>
  )
}

export default Home
