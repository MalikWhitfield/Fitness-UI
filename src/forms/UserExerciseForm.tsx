import { useEffect, React, useState } from "react";
import { useFormik } from "formik";
import { UserExercise } from "../models/interfaces/UserExercise";
import { Select } from "@mui/material";

export function UserExerciseForm(props) {
  const [userExercise, setUserExercise] = useState<UserExercise>({
    id: 0,
    exerciseId: 0,
    userId: "",
    maxWeight: 0,
    bestTime: 0,
  });

  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: {
      id: userExercise.id,
      userId: userExercise.userId,
      maxWeight: userExercise.maxWeight,
      bestTime: userExercise.bestTime,
      exerciseId: userExercise.exerciseId,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1>UserExerciseForm!</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="maxWeight">Max Weight</label>
        <input
          id="maxWeight"
          name="maxWeight"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.maxWeight}
        />
        <label htmlFor="bestTime">Best Time</label>
        <input
          id="bestTime"
          name="bestTime"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bestTime}
        />
        <label htmlFor="exercise">Exercise</label>
        {/* <Select>

        </Select> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
