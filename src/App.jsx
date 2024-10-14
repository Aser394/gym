import Generator from "./components/Generator";
import Heros from "./components/Heros";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/function";
function App() {
  const [posion, setPosion] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");
  const [workout, setWorkout] = useState(null);

  function formulate() {
    if (muscles.length > 1) {
      return;
    }
    let newWorkout = generateWorkout({ posion, muscles, goals });
    console.log(newWorkout);
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }
  return (
    <main className="min-h-screen bg-gradient-to-t from-slate-900 to-slate-950 text-white flex flex-col text-sm sm:text-base ">
      <Heros />
      <Generator
        posion={posion}
        setPosion={setPosion}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        formulate={formulate}
      />
      {workout && <Workout workout={workout} muscles={muscles} />}

      {console.log(posion)}
      {console.log(muscles)}
      {console.log(goals)}
    </main>
  );
}

export default App;
