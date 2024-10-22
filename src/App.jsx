import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import {generateWorkout} from './utils/functions'

function App() {
  //Pick your POISON- Type of Workout
  const [poison, setPoison] = useState("individual"); //Header 01

  
  //Select muscle groups
  const [muscles, setMuscles] = useState([]);

  //Select your ultimate objective (GOAL) -Your ultimate goal
  const [goal, setGoal] = useState("strength_power"); //Header 03

  const [workout, setWorkout] = useState(null);

  function updateWorkout(){
   if(muscles.length<1){
    return;
   }
   let newWorkout= generateWorkout({poison, muscles, goal});
   console.log(newWorkout);
   setWorkout(newWorkout);
   window.location.href="#workout";
  }
  //  from-slate-800 to-slate-950
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-greenish  via-[#399ce2] to-bluish text-white text-sm sm:text-base">
     <Hero/>
     <Generator poison={poison} setPoison={setPoison} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout}/>
     {workout && <Workout workout={workout}/> }  
    </main>
  )
}

export default App
