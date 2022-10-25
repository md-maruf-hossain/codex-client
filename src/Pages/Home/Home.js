import React from "react";
import Benefit from "./Benefit";
import Collab from "./Collab";
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
      <Collab></Collab>
      <DownloadApp></DownloadApp>
    </div>
  );
};

export default Home;
