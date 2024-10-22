import SectionWrapper from "./SectionWrapper"
import ExerciseCard from "./ExerciseCard"

export default function Workout({workout}) {
  console.log(workout);
  return (
    <SectionWrapper id="workout" header={"welcome to"} title={['The', 'DANGER', 'zone']}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i)=> {
          return(
            <ExerciseCard key={i} index={i} exercise={exercise}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
