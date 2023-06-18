import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
  let [input, setInput] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setInput(() => e.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={searchHandler}
      />
    </form>
  );
}
