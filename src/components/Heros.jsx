import React from "react";
import Buttons from "./Buttons";

export default function Heros() {
  return (
    <div className="min-h-screen flex flex-col text-center justify-center max-w-[900] mx-auto gap-10">
      {" "}
      <div className="flex flex-col gap-4">
        <p className="">IT'S TIME TO GET</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
          To <span className="text-blue-400 font-bold">WORK</span>OUT
        </h1>
        <p className="">
          If you want something you've{" "}
          <span className="text-blue-400 font-bold">never had</span>, you must
          be willing to do something you've{" "}
          <span className="text-blue-400 font-bold">never done</span>.
        </p>
      </div>
      <Buttons
        func={() => {
          window.location.href = "#generate";
        }}
        title="Lets Go"
      />
    </div>
  );
}
