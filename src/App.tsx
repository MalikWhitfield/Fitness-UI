import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Exercise } from "./models/interfaces/Exercise";
import { Header, List } from "semantic-ui-react";
import { UserExerciseForm } from "./forms/UserExerciseForm";
import { UserForm } from "./forms/UserForm";

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
        <Header as="h2" icon="users" content="All Exercises" />
        <List>
          {exercises.length > 0 ? (
            exercises.map((exercise: Exercise) => (
              <>
                <List.Item key={exercise.id}>{exercise.name}</List.Item>
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
