import { useState } from "react";

const List = (props) => {
  const [userInput, setUserInput] = useState("");

  function changeHandle(e) {
    setUserInput(e.target.value.trim());
  }
  function submitHandle(e) {
    e.preventDefault();

    if (userInput.length) {
      props.setList((prevState) => [
        ...prevState,
        { id: prevState.length, title: userInput.trim(), done: false },
      ]);
      setUserInput("");
    }
  }
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={userInput} onChange={changeHandle} />
      <input type="submit" value="Add"></input>
    </form>
  );
};
export default List;
