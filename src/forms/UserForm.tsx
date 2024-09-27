import { useEffect } from "react";

export function UserForm(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <h1>User Form!</h1>
    </>
  );
}
