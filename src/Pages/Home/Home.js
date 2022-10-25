import React from "react";
import Benefit from "./Benefit";
import DownloadApp from "./DownloadApp";
import Header from "./Header";
import Offer from "./Offer";
import Stat from "./Stat";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Benefit></Benefit>
      <Stat></Stat>
      <Offer></Offer>
      <DownloadApp></DownloadApp>
    </div>
  );
};

export default Home;
