import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/exerciseInfo";
import { useState } from "react";
import Button from "./Button";

//This could have been another Component but we added it in the same component
function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-deeperBlue">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
export default function Generator({poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout}) {
  //showModal is now not a traditional variable, but a react stateful variable

  //To make the modal show or not show on clicking the button
  const [showModal, setShowModal] = useState(false); //Header 02

  function updateMuscles(muscleGroup) {
    //FUNCTIONALITY: Double clicking on a muscle group removes that muscle group from the 'muscles' array (state variable)
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    // FUNCTIONALITY: You can't add more than 3 muscle groups to the 'muscles' array (state variable)
    if (muscles.length===3) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }
  
    //FUNCTIONALITY: In case of poison == 'individual', muscleGroup is a single string
    setMuscles((prevMuscleGroups)=> {
      // if(muscles.length===2){//Means you'll be adding the 3rd muscle group in the next render
      //   setShowModal(false);
      // }
      return [...prevMuscleGroups, muscleGroup]});

    if(muscles.length==2){
      setShowModal(false);
    }
  }
 
  
  return (
    // Since we want children content within the SectionWarpper, we have both opening and closing tags, instead of a simple self-closing tag
    <SectionWrapper id="generate"
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      {/* Header 1 */}
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />

      {/* Select the TYPE of workout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              onClick={() => {
                setMuscles([]);
                setShowModal(true);
                setPoison(type);
              }}
              className={
                "bg-slate-900 border-2 border-deeperBlue py-3 rounded-lg duration-200 px-4 hover:border-greenish " +
                (type === poison ? "border-greenish" : "")
              }
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      {/* Header 2 */}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />

      <div className="bg-slate-900 border-2 border-solid border-deeperBlue py-3 rounded-lg flex flex-col">
        <button
          onClick={() => {
            return setShowModal((prevValue) => !prevValue);
          }}
          className="relative flex items-center justify-center p-3"
        >
          <p className="capitalize">{muscles.length==0?"Select muscle groups": muscles.join(" ")}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>

        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  key={muscleGroupIndex}
                  onClick={() => updateMuscles(muscleGroup)}
                  className={
                    "" +
                    (muscles.includes(muscleGroup) ? "text-blue-400" : "hover:text-blue-200 duration-200 ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Header 3 */}
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              onClick={() => setGoal(scheme)}
              className={
                "bg-slate-900 border-2 border-deeperBlue py-3 rounded-lg duration-200 px-4 hover:border-greenish " +
                (scheme === goal ? "border-greenish" : "")
              }
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Button text={"Formulate"} func={updateWorkout}/>
    </SectionWrapper>
  );
}
