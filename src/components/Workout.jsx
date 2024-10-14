import React from "react";
import SectionWrapper from "./SectionWrapper";
import Exercise from "./Exercise";

export default function Workout(props) {
  const { workout, muscle } = props;

  return (
    <SectionWrapper
      id="workout"
      title="Welcome to"
      header={["The ", "Danger ", "Zone"]}
    >
      {/* {muscle ? (
        workout.map((exercise, exerciseIndex) => (
          <Exercise exercise={exercise} i={exerciseIndex} key={exerciseIndex} />
        ))
      ) : (
        <div className="m-24 p-20 flex text-center justify-center">
          <p className="text-xl w-full text-slate-100 border-2 p-2 rounded-lg border-blue-300 bg-slate-950">
            Select A Muscle Group
          </p>
        </div>
      )}  */}

      {workout.map((exercise, exerciseIndex) => (
        <Exercise exercise={exercise} i={exerciseIndex} key={exerciseIndex} />
      ))}
    </SectionWrapper>
  );
}
