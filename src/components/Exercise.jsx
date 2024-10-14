import React from "react";
import { useState } from "react";
export default function Exercise({ exercise, i }) {
  const [complete, setComplete] = useState(0);

  function CompleteHandler() {
    setComplete((complete + 1) % 6);
  }
  return (
    <div className="flex flex-col bg-slate-950 gap-6 p-5 rounded-lg ">
      <div className="flex justify-between items-center capitalize ">
        <h1 className="text-4xl md:text-5xl text-gray-400 hidden sm:inline">
          0{i + 1}
        </h1>
        <h1 className="text-xl md:text-2xl ">
          {exercise.name.replaceAll("_", " ")}
        </h1>
        <p className="text-xs text-gray-400 ">{exercise.type}</p>
      </div>

      <div className="capitalize text-xs sm:text-sm">
        <p className="text-gray-400">Muscle Group</p>
        <h3 className="">{exercise.muscles.join(" & ")}</h3>
      </div>

      <div className="text-xs md:text-sm">
        {exercise.description.split("__").map((val) => {
          return <p className="">{val}</p>;
        })}
        {console.log(exercise.description.split("___"))}
      </div>

      <div className="capitalize grid grid-cols-4 gap-4 ">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div className="border-[0.5px] border-blue-950 text-center p-2 px-3">
              <p className="text-gray-400 text-xs md:text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </p>
              <p className="">{exercise[info]}</p>{" "}
            </div>
          );
        })}
        <button
          onClick={CompleteHandler}
          className="border-[0.5px] border-blue-300 text-center p-2 px-3 duration-200"
        >
          <p className="text-gray-400 text-xs md:text-sm">set completed</p>
          <p className="">{complete} / 5</p>{" "}
        </button>
      </div>
    </div>
  );
}
