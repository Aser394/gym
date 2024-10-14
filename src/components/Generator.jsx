import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Buttons from "./Buttons";

function Header(props) {
  const { index, title, header } = props;

  return (
    <div className="max-w-[800] p-10 flex items-center flex-col gap-5">
      <div className="flex items-center gap-3">
        <p className="text-gray-400 text-4xl lg:text-6px font-bold">{index}</p>
        <span className="text-xl sm:text-2xl md:text-3xl ">{title}</span>
      </div>
      <p className="flex justify-center text-xs md:sm">{header}</p>
    </div>
  );
}

export default function Generator(props) {
  const [mgButton, setMgButton] = useState(false);
  const { posion, setPosion, muscles, setMuscles, goals, setGoals, formulate } =
    props;

  function MGhandler() {
    setMgButton(!mgButton);
  }

  function MGselector(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscles.length > 2) {
      return;
    }
    if (posion !== "individual") {
      setMuscles([muscleGroup]);
      return;
    }
    setMuscles([...muscles, muscleGroup]);

    if (muscles.length === 2) {
      setMgButton(false);
    }
  }

  return (
    <SectionWrapper
      id="generate"
      title="generate your workout"
      header={["It's ", "Huge ", "o'clock"]}
    >
      <Header
        index="01"
        title="Pick your posion"
        header="Select the workout you wish to endure"
      />

      {
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => (
            <button
              onClick={() => {
                setMuscles([]);
                setPosion(type);
              }}
              className={
                "border-2 p-4 rounded-md  hover:border-orange-300  " +
                (type === posion ? "border-orange-300" : "border-blue-300")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replace("_", " ")}</p>
            </button>
          ))}
        </div>
      }
      <Header
        index="02"
        title="Lock On Target"
        header="Select the muscles judged for annihilation"
      />
      {
        <div className="bg-slate-950 rounded-lg border-[1.5px] border-blue-400 flex flex-col hover:border-orange-300">
          <button
            onClick={MGhandler}
            className={
              "relative p-3 flex flex-col items-center justify-center " +
              (mgButton
                ? "border-dashed border-b-[1.5px] border-b-blue-300"
                : "")
            }
          >
            <p className="capitalize ">
              {muscles == 0 ? "select a muscle group" : muscles.join(" , ")}
            </p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
          {mgButton && (
            <div className="flex flex-col text-center uppercase gap-4 py-5 pb-6">
              {(posion === "individual"
                ? WORKOUTS[posion]
                : Object.keys(WORKOUTS[posion])
              ).map((muscleGroup, muscleGroupIndex) => (
                <button
                  key={muscleGroupIndex}
                  onClick={() => MGselector(muscleGroup)}
                  className={
                    "hover:text-blue-300 uppercase " +
                    (muscles.includes(muscleGroup) ? "text-orange-300" : "")
                  }
                >
                  <p className="capitaize">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      }
      <Header
        index="03"
        title="Becoming juggernaut"
        header="Select your ultimate objective"
      />
      {
        <div className="flex flex-col ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-5 sm:text-sm">
            {Object.keys(SCHEMES).map((schemes, schemesIndex) => (
              <button
                onClick={() => {
                  setGoals(schemes);
                }}
                key={schemesIndex}
                className={
                  "border-2 border-blue-300 py-3 rounded-md  hover:border-orange-300 text-center " +
                  (schemes === goals ? "border-orange-300" : "border-blue-300")
                }
              >
                {schemes.replaceAll("_", " ")}
              </button>
            ))}
          </div>
          <Buttons func={formulate} title="Formulate" />
        </div>
      }
    </SectionWrapper>
  );
}
