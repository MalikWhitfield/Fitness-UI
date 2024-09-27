import { useEffect } from "react";

export function UserExerciseForm(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <h1>UserExerciseForm!</h1>
    </>
  );
}
