import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Exercise } from "./models/Exercise";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5000/api/v1/exercises").then((res) => {
      setExercises(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Reactivities</h1>
        <ul>
          {exercises ? (
            exercises.map((exercise: Exercise) => (
              <>
                <li key={exercise.id}>{exercise.name}</li>
              </>
            ))
          ) : (
            <>
              <h1>No Exercises</h1>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
