import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Exercise } from "./models/interfaces/Exercise";
import { UserExerciseForm } from "./forms/UserExerciseForm";
import { UserForm } from "./forms/UserForm";
import { CardHeader, List, ListItem } from "@mui/material";

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
        <UserExerciseForm props="hello" />
        <UserForm props={"hello"} />
        <CardHeader as="h2" icon="users" content="All Exercises" />
        <List>
          {exercises.length > 0 ? (
            exercises.map((exercise: Exercise) => (
              <>
                <ListItem key={exercise.id}>{exercise.name}</ListItem>
                <p>{exercise.description}</p>
                <p>Exercise Type: {exercise.exerciseType}</p>
              </>
            ))
          ) : (
            <>
              <h1>No Exercises</h1>
            </>
          )}
        </List>
      </div>
    </>
  );
}

export default App;
