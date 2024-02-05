import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ getSearch, setSearchMe, SearchMe }) => {
  const [SearchCont, setSearchCont] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (SearchMe) {
      inputRef.current.focus();
    }
  }, [SearchMe]);

  const changeSearch = (e) => {
    setSearchCont(e.target.value);
    getSearch(e.target.value);
  };
  const SendSearchRes = () => {
    setSearchCont("");
    setSearchMe(false);
  };
  return (
    <div className="position-absolute bg-white top-100 transform-middle searchBar">
      <div className="border border-2 border p-2 d-flex justify-content-between align-items-center  gap-3 w-100">
        <input
          ref={inputRef}
          type="text"
          value={SearchCont}
          className="text-black bg-transparent border-0 inp w-100"
          placeholder="Your Favourite Products"
          onChange={changeSearch}
        />
        <button
          className="bg-transparent border-0 icons d-flex justify-content-center align-items-center"
          onClick={SendSearchRes}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
