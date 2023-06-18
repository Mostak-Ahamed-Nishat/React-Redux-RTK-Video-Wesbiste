import { useState } from "react";
import { useDispatch } from "react-redux";
import { searched } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Search() {
  let [input, setInput] = useState("");

  //check the url if it matches to the home URL then stay in the same page if it doesn't redirect to the home page and get the search results

  const match = useMatch("/");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    setInput(() => e.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) {
      navigate("/");
    }
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
