import React from "react";
import Topbar from "../Shared/Topbar";
import Card from "../Shared/Card";
import Header from "../Shared/Topbar";

function Home() {
  return (
    <div className="body-container relative pb-20 sm:pb-0 flex">
      <Header></Header>
      <main className="w-ful sm:ml-[90px] bg-[#1c1f2e]">
        <Topbar></Topbar>
        <Card></Card>
      </main>
    </div>
  );
}

export default Home;
