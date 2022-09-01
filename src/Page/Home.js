import React from "react";
import Topbar from "../Shared/Topbar";
import Card from "../Shared/Card";
import Header from "../Shared/Header";
import Bennar from "../Shared/Bennar";

function Home() {
  return (
    <div className="body-container relative pb-20 sm:pb-0 flex">
      <Header></Header>
      <main className="w-full sm:ml-[90px]">
        <Topbar></Topbar>
        <section className="home-body bg-[#212534] pt-[80px] flex w-full">
          <div className="p-8 sm:pt-8 lg:pt-16 w-full border-r">
            <Card></Card>
          </div>
          <div className="p-8 sm:pt-8 lg:pt-16 w-full sm:border-1">
            <div className="max-w-xl mx-auto">
              <Bennar></Bennar>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
